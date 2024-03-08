import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import BottomNav from "components/common/BottomNav";
import CoffeeChatCard from "components/common/card/CoffeeChatCard";
import { useEffect, useState } from "react";
import { getCoffeeChat, getJobCategory } from "api/api";
import PaginationComponent from "components/common/Pagenation";
// import CoffeeBanner from './CoffeeBanner';

import { useRecoilState } from "recoil";
import { kindOfJdState } from "recoil/atoms";
import HeaderWithSearchBar from "components/common/search-bar/HeaderWithSearchBar";
import FiltersAndButton from "./FiltersAndButton";

export function Coffee() {
  const [coffeeData, setCoffeeData] = useState({
    content: [],
    pageInfo: {
      totalPages: 0,
      pageSize: 12,
      first: true,
      last: false,
      empty: true,
    },
  });
  const [sortData, setSortData] = useState({
    sorting: "createdDate",
    jobCategory: "",
  });
  const [currentPage, setCurrentPage] = useState(1);
  const [kindOfJd, setKindOfJd] = useRecoilState(kindOfJdState);

  // 추후 스켈레톤 UI 반영 시 지울 내용입니다.
  const [foundTxt, setFoundTxt] = useState("커피챗 정보 불러오는 중..");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFoundTxt("커피챗 정보가 없습니다.");
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  // --------------------------------

  const handlePageChange = (_, newPage) => {
    setCurrentPage(newPage);
  };

  useEffect(() => {
    (async (currentPage) => {
      try {
        const data = await getCoffeeChat(
          currentPage - 1,
          coffeeData.pageInfo.pageSize || 12,
          sortData.sorting,
          sortData.jobCategory
        );
        setCoffeeData(data.data.data);
      } catch (error) {
        console.error("Error fetching getCoffeeChat:", error);
      }
    })(currentPage);
  }, [
    sortData.sorting,
    sortData.jobCategory,
    currentPage,
    coffeeData.pageInfo.pageSize,
  ]);

  useEffect(() => {
    (async () => {
      try {
        const { jobGroupList } = await getJobCategory();
        setKindOfJd(jobGroupList[0].jobCategoryList);
      } catch (error) {
        console.error("Error fetching job categories:", error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container maxWidth="md" sx={{ pb: 10 }}>
      <HeaderWithSearchBar isSearchBarTrue={false} />
      <FiltersAndButton
        sortData={sortData}
        onChange={setSortData}
        kindOfJd={kindOfJd}
      />
      <Grid container spacing={{ xs: 2, md: 2 }}>
        {coffeeData?.content?.length > 0 ? (
          coffeeData.content.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} key={index}>
              <CoffeeChatCard data={item} kindOfJd={kindOfJd} />
            </Grid>
          ))
        ) : (
          <Typography
            sx={{
              ml: 2,
              mt: 8,
              width: "100%",
              textAlign: "center",
              fontSize: "16px",
              color: "#B9B9B9",
              fontWeight: 600,
            }}
          >
            {foundTxt}
          </Typography>
        )}
      </Grid>
      {coffeeData?.content?.length > 0 && (
        <BasicPagination
          coffeeData={coffeeData}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      )}
      <BottomNav />
    </Container>
  );
}

function BasicPagination({ coffeeData, currentPage, handlePageChange }) {
  return (
    <Box
      sx={{
        width: "100%",
        py: 3,
      }}
    >
      <Stack justifyContent="center" alignItems="center">
        <PaginationComponent
          pageCount={coffeeData?.pageInfo.totalPages}
          currentPage={currentPage}
          onChange={handlePageChange}
        />
      </Stack>
    </Box>
  );
}
