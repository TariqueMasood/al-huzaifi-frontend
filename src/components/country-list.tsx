import React, { useEffect, useState } from "react";
import countries from "i18n-iso-countries";
import enLocale from "i18n-iso-countries/langs/en.json";
import { Form, Select } from "antd";

const { Option } = Select;

countries.registerLocale(enLocale);

interface Country {
  code: string;
  name: string;
}

interface CountryListProps {
  name: string;
  value?: string;
  onChange: (value: string) => void;
}

const CountryList: React.FC<CountryListProps> = ({ name, value, onChange }) => {
  const [countryList, setCountryList] = useState<Country[]>([]);

  useEffect(() => {
    const countryNames = countries.getNames("en", { select: "official" });
    const formattedCountries = Object.entries(countryNames).map(
      ([code, name]) => ({
        code,
        name,
      })
    );
    setCountryList(formattedCountries);
  }, []);

  return (
    <Form.Item
      name={name}
      label="Select Country"
      rules={[{ required: true, message: "Please select a country" }]}
    >
      <Select
        showSearch
        placeholder="-- Select Country --"
        value={value}
        onChange={onChange}
        optionFilterProp="children"
        filterOption={(input, option) =>
          (option?.children as unknown as string)
            .toLowerCase()
            .includes(input.toLowerCase())
        }
      >
        {countryList.map(({ code, name }) => (
          <Option key={code} value={name}>
            {name}
          </Option>
        ))}
      </Select>
    </Form.Item>
  );
};

export default CountryList;
