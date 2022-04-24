import { useState } from "react";
import { CSVLink } from "react-csv";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

const columns = [
  { id: "schoolName", label: "School Name", align: "left" },
  { id: "studentName", label: "Student Name", align: "left" },
  { id: "studentGrade", label: "Student Grade", align: "right" },
];

const headers = [
  { label: "School", key: "schoolName" },
  { label: "Student", key: "studentName" },
  { label: "Grade", key: "studentGrade" },
];

const GradesReport = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const { grades } = props;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      <Paper sx={{ width: "80% ", overflow: "hidden" }}>
        <TableContainer>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell colSpan={columns.length} align={"right"}>
                  <CSVLink
                    data={grades}
                    filename={"grades.csv"}
                    headers={headers}
                    style={{
                      alignItems: "center",
                      display: "flex",
                      justifyContent: "right",
                    }}
                  >
                    Download <FileDownloadIcon />
                  </CSVLink>
                </TableCell>
              </TableRow>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    <h3>{column.label}</h3>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {grades
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((grade) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={grade.studentName}
                    >
                      {columns.map((column) => {
                        const value = grade[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={grades.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default GradesReport;
