import React from 'react';
import StarsComp from "./StarsComp";
import Box from "@mui/material/Box";

export default function Rating({movie}) {
    return(
        <>
        <div className="rates_movie">
        <span>Оцінка: {movie.rate}</span>
        <span>({movie.vote} голоси)</span>
        </div>
        <div
          className={
            movie.rate >= "2.1" && movie.rate < "2.9"
              ? "container_star_2"
              : "unActive"
          }
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              "> div": {
                marginBottom: "20px",
              },
            }}
          >
            <Box>
              <StarsComp precision={0.5} />
            </Box>
          </Box>
        </div>{" "}
        <div
          className={
            movie.rate >= "3.1" && movie.rate <= "3.9"
              ? "container_star_3"
              : "unActive"
          }
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              "> div": {
                marginBottom: "20px",
              },
            }}
          >
            <Box>
              <StarsComp precision={0.5} />
            </Box>
          </Box>
        </div>{" "}
        <div
          className={
            movie.rate >= "4.1" && movie.rate < "4.9"
              ? "container_star_4"
              : "unActive"
          }
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              "> div": {
                marginBottom: "20px",
              },
            }}
          >
            <Box>
              <StarsComp precision={0.5} />
            </Box>
          </Box>
        </div>{" "}
        <div
          className={
            movie.rate === "4"
              ? "container_star_4_0"
              : "unActive"
          }
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              "> div": {
                marginBottom: "20px",
              },
            }}
          >
            <Box>
              <StarsComp precision={0.5} />
            </Box>
          </Box>
        </div>{" "}
        <div
          className={
            movie.rate === "2"
              ? "container_star_2_0"
              : "unActive"
          }
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              "> div": {
                marginBottom: "20px",
              },
            }}
          >
            <Box>
              <StarsComp precision={0.5} />
            </Box>
          </Box>
        </div>{" "}
        <div
          className={
            movie.rate === "3"
              ? "container_star_3_0"
              : "unActive"
          }
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              "> div": {
                marginBottom: "20px",
              },
            }}
          >
            <Box>
              <StarsComp precision={0.5} />
            </Box>
          </Box>
        </div>{" "}
        <div
          className={
            movie.rate === "5"
              ? "container_star_5_0"
              : "unActive"
          }
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "100vh",
              "> div": {
                marginBottom: "20px",
              },
            }}
          >
            <Box>
              <StarsComp precision={0.5} />
            </Box>
          </Box>
        </div>{" "}
     </>
    )
}