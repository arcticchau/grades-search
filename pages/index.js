import { useEffect, useState } from "react";
import Head from "next/head";
import Stack from "@mui/material/Stack";
import GradesReport from "../components/GradesReport";
import SchoolSearch from "../components/SchoolSearch";

export default function Home() {
  const [grades, setGrades] = useState([]);

  const fetchGrades = async (schoolName) => {
    const res = await fetch(`/api/grades?schoolName=${schoolName}`);
    const data = await res.json();
    setGrades(data);
  };

  useEffect(() => {
    fetchGrades("");
  }, []);

  const onSearch = (schoolName) => {
    fetchGrades(schoolName);
  };

  return (
    <div>
      <Head>
        <title>Grades</title>
        <meta
          name="description"
          content="Sample application to display student grades given a school name."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Stack spacing={1} alignItems={"center"}>
          <h1>Grades</h1>
          <SchoolSearch onSearch={onSearch} />
          <GradesReport grades={grades} />
        </Stack>
      </main>
    </div>
  );
}
