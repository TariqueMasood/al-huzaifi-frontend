import React, { useEffect, useMemo, useState } from "react";
import { Table, Input, Select, Alert, Spin, Typography } from "antd";
import styled from "styled-components";
import { useUsers } from "../../hooks/use-queries";
import { User } from "../../@types/registered-user";

const { Option } = Select;
const { Title } = Typography;
const { Search } = Input;

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

  if (isError)
    return <Alert message="Error fetching users data" type="error" />;

  return (
    <Wrapper>
      <Header>
        <Title level={3}>Registered Users</Title>
        <Search
          placeholder="Search users..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ maxWidth: 300 }}
        />
      </Header>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={filteredData || []}
        rowKey="email"
        pagination={{
          pageSize,
          showSizeChanger: true,
          pageSizeOptions: ["5", "10", "20"],
          onShowSizeChange: (_, size) => setPageSize(size),
        }}
        scroll={{ x: true }}
      />
    </Wrapper>
  );
};

export default RegisteredUsers;

const Wrapper = styled.div`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
