import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import { SearchContext } from "../../../model/SearchProvider";

export default function Search({
  transcript,
  isListening,
  handleFocus,
  handleBlur,
}) {
  const [keyword, setKeyword] = useContext(SearchContext);

  const handleKeywordChange = (event) => {
    if (isListening) {
      event.preventDefault(); // isListening이 true일 때 스페이스바 쭈욱~입력 방지
    } else {
      // isListening이 false일 때 정상적으로 입력 처리 ㄱㄱ
      setKeyword(event.target.value);
    }
  };

  useEffect(() => {
    setKeyword(transcript);
  }, [transcript]);
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "1200px",
        height: "74px",
        borderRadius: "20px",
        border: "3px solid #000000",
        overflow: "hidden",
        backgroundColor: isListening ? "red" : "transparent",
      }}
    >
      <InputBase
        value={keyword}
        onChange={handleKeywordChange}
        sx={{
          ml: 1,
          flex: 1,
          fontSize: "24px",
          fontWeight: "bold",
          color: "black",
          textAlign: "right",
          backgroundColor: isListening ? "red" : "transparent",
        }}
      />
      <Link to="/search" style={{ textDecoration: "none", color: "inherit" }}>
        <Button
          onFocus={handleFocus}
          onBlur={handleBlur}
          disabled={keyword === ""}
          style={{
            ...(keyword === ""
              ? { opacity: "0.2", cursor: "not-allowed" }
              : {}),
            display: "inline-flex",
            width: "fit-content",
            height: "auto",
            padding: "9px 25px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "NanumGothic",
            fontStyle: "normal",
            lineHeight: "36px",
            margin: "10px",
          }}
        >
          검색
        </Button>
      </Link>
    </Paper>
  );
}
