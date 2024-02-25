import {DataTable, Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from "carbon-components-react";
import {useFetchList} from "@/hooks/index.js";

export const HeroPage = () => {
  const data = useFetchList({
      url: 'products/public'
  })


  const rows = [
    { id: 'row-1', name: 'Item 1', description: 'Description of Item 1' },
    { id: 'row-2', name: 'Item 2', description: 'Description of Item 2' },
    { id: 'row-3', name: 'Item 3', description: 'Description of Item 3' },
  ];

  // Table headers
  const headers = [
    { key: 'name', header: 'Name' },
    { key: 'description', header: 'Description' },
  ];

  return <div>
    <DataTable
            rows={rows}
            headers={headers}
            render={({ rows, headers, getHeaderProps }) => (
              <Table>
                <TableHead>
                  <TableRow>
                    {headers.map(header => (
                      <TableHeader key={header.key} {...getHeaderProps({ header })}>
                        {header.header}
                      </TableHeader>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.id}>
                      {row.cells.map(cell => (
                        <TableCell key={cell.id}>{cell.value}</TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          />
  </div>;
};
