import React, { useEffect, useMemo, useState } from "react";
import { Table, Input, Select, Alert, Spin } from "antd";
import styled from "styled-components";
import { useUsers } from "../../hooks/use-queries";
import { User } from "../../@types/registered-user";

const { Option } = Select;

const RegisteredUsers: React.FC = () => {
  const { data: users, isLoading, isError } = useUsers();

  const [filteredData, setFilteredData] = useState<User[]>([]);
  const [searchText, setSearchText] = useState("");
  const [pageSize, setPageSize] = useState(5);

  // Filter logic
  useEffect(() => {
    if (users) {
      const filtered = users.filter(
        (user: { name: any; email: any; role: any }) =>
          [user.name, user.email, user.role].some((field) =>
            field.toLowerCase().includes(searchText.toLowerCase())
          )
      );
      setFilteredData(filtered);
    }
  }, [searchText, users]);

  const columns = useMemo(
    () => [
      {
        title: "Name",
        dataIndex: "name",
        key: "name",
        sorter: (a: User, b: User) => a.name.localeCompare(b.name),
      },
      {
        title: "Email",
        dataIndex: "email",
        key: "email",
        sorter: (a: User, b: User) => a.email.localeCompare(b.email),
      },
      {
        title: "Role",
        dataIndex: "role",
        key: "role",
        filters: [
          { text: "Admin", value: "admin" },
          { text: "User", value: "user" },
        ],
        onFilter: (value: any, record: { role: any }) => record.role === value,
      },
    ],
    []
  );

  if (isLoading) {
    return <Spin tip="Loading..." fullscreen />;
  }
  if (isError)
    return <Alert message="Error fetching users data" type="error" />;

  return (
    <Wrapper>
      <Header>
        <h2>Registered Users</h2>
        <Input
          placeholder="Search users..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="search-input"
        />
      </Header>

      <Table
        dataSource={filteredData}
        columns={columns}
        rowKey="email"
        pagination={{
          pageSize,
          showSizeChanger: false,
        }}
      />

      <PaginationWrapper>
        <span>Page Size: </span>
        <Select
          value={pageSize}
          onChange={(size) => setPageSize(size)}
          className="page-size-select"
        >
          {[5, 10, 20].map((size) => (
            <Option key={size} value={size}>
              Show {size}
            </Option>
          ))}
        </Select>
      </PaginationWrapper>
    </Wrapper>
  );
};

export default RegisteredUsers;

const Wrapper = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.secondaryBg};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .search-input {
    max-width: 300px;
  }
`;

const PaginationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
  gap: 8px;

  .page-size-select {
    width: 120px;
  }
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
