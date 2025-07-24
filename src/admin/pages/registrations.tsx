import React, { useState } from "react";
import {
  Table,
  Input,
  Button,
  Modal,
  Select,
  Typography,
  Space,
  message,
} from "antd";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";
import {
  useRegistrations,
  useDeleteRegistration,
} from "../../hooks/use-queries";
import { RegistrationPayload } from "../../@types/registration";
import { formatPhoneWithCountryCode } from "./registration-details";
import type { ColumnsType } from "antd/es/table";

const { Search } = Input;
const { Title } = Typography;

const Registrations: React.FC = () => {
  const {
    data: registrations,
    isLoading,
    isError,
    refetch,
  } = useRegistrations();

  const deleteRegistration = useDeleteRegistration();
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [pageSize, setPageSize] = useState(5);

  const filteredData = registrations?.filter((user: RegistrationPayload) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return fullName.includes(search.toLowerCase());
  });

  const handleDelete = (id: string) => {
    Modal.confirm({
      title: "Confirm Delete",
      content: "Are you sure you want to delete this registration?",
      okText: "Delete",
      okType: "danger",
      cancelText: "Cancel",
      onOk() {
        deleteRegistration.mutate(id, {
          onSuccess: () => {
            message.success("Deleted successfully");
            refetch();
          },
          onError: () => {
            message.error("Failed to delete registration.");
          },
        });
      },
    });
  };

  const columns: ColumnsType<RegistrationPayload> = [
    {
      title: "Full Name",
      dataIndex: "firstName",
      key: "fullName",
      render: (_: any, record: RegistrationPayload) => (
        <Link to={`/dashboard/registrations/${record._id}`}>
          {`${record.firstName} ${record.lastName}`}
        </Link>
      ),
      sorter: (a: RegistrationPayload, b: RegistrationPayload) =>
        `${a.firstName} ${a.lastName}`.localeCompare(
          `${b.firstName} ${b.lastName}`
        ),
    },
    {
      title: "Gender",
      dataIndex: "gender",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      render: (val: string) => formatPhoneWithCountryCode(val),
    },
    {
      title: "Faculty",
      dataIndex: "faculty",
    },
    {
      title: "Course",
      dataIndex: "course",
    },
    {
      title: "Country",
      dataIndex: "country",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_: any, record: RegistrationPayload) => (
        <Space>
          <Button
            type="primary"
            size="small"
            onClick={() => navigate(`/dashboard/registrations/${record._id}`)}
          >
            View
          </Button>
          <Button danger size="small" onClick={() => handleDelete(record._id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  if (isError) return <Wrapper>Error fetching users data</Wrapper>;

  return (
    <Wrapper>
      <Header>
        <Title level={3}>Registered Users</Title>
        <Search
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ maxWidth: 300 }}
        />
      </Header>

      <Table
        loading={isLoading}
        columns={columns}
        dataSource={filteredData || []}
        rowKey="_id"
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

export default Registrations;

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundWhite};
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;
