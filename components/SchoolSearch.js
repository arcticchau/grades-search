import { useState } from "react";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";

const SchoolSearch = (props) => {
  const [schoolName, setSchoolName] = useState("");

  const { onSearch } = props;

  return (
    <>
      <div
        style={{
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <TextField
          id="school-name"
          label="School Name"
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          style={{
            width: "50%",
          }}
        />
        <Button
          variant="text"
          onClick={() => {
            onSearch(schoolName);
          }}
        >
          <SearchIcon />
        </Button>
      </div>
    </>
  );
};

export default SchoolSearch;
