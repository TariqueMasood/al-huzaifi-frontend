import React, { useState } from "react";
import { Menu, Drawer, Button } from "antd";
import { DownOutlined, MenuOutlined } from "@ant-design/icons";
import { TopHeader } from "./top-header";
import styled from "styled-components";
import useViewportWidth from "../hooks/use-viewport-width";
import { Link } from "react-router-dom";

// ✅ Menu Items with dropdown icon manually added

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const isMobile = useViewportWidth("md");

  const toggleDrawer = () => setOpen(!open);
  const closeDrawer = () => setOpen(false);

  const menuItems = [
    { label: <Link to="/">Home</Link>, key: "home" },
    { label: <Link to="/about">About</Link>, key: "about" },

    {
      label: !isMobile ? (
        "Program"
      ) : (
        <span>
          Program <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
        </span>
      ),
      key: "program",
      children: [
        {
          label: "Quran Courses",
          key: "quran courses",
          children: [
            {
              label: <Link to="/noorani-qaedah">"Noorani Qa'edah Course"</Link>,
              key: "noorani qa'edah course",
            },
            {
              label: (
                <Link to="/recitation-course">Quran Recitation Course</Link>
              ),
              key: "quran recitation course",
            },
            {
              label: "Quran Memorition Course",
              key: "quran memorization course",
            },
            { label: "Tajweed Course", key: "tajweed course" },
            { label: "Seven Qiraats Course", key: "seven qiraats course" },
            { label: "Quran Ijazah Course", key: "quran ijazah course" },
            {
              label: "Quran's Translation Course",
              key: "quran's translation course",
            },
            { label: "Tafseer Course", key: "tafseer course" },
          ],
        },
        {
          label: "Deeniyat Courses",
          key: "deeniyat courses",
          children: [
            { label: "Deeniyat For Kids", key: "deeniyat for kids" },
            { label: "Deeniyat For Men", key: "deeniyat for men" },
            { label: "Deeniyat For Women", key: "deeniyat for women" },
          ],
        },
        {
          label: "Alimiyat Courses",
          key: "alimiyat courses",
          children: [
            {
              label: "Dars-e-Nizami Carriculum",
              key: "dars-e-nizami carriculum",
            },
            { label: "Modern Carriculum", key: "modern carriculum" },
          ],
        },
        {
          label: "Fazilat Courses",
          key: "fazilat courses",
          children: [
            {
              label: "Fazilat in Quranic Science",
              key: "fazilat in quranic science",
            },
            {
              label: "Fazilat in Hadith Science",
              key: "fazilat in hadith science",
            },
            {
              label: "Fazilat in Islamic Jurisprudence",
              key: "fazilat in islamic jurisprudence",
            },
            { label: "Fazilat in Theology", key: "fazilat in theology" },
            {
              label: "Fazilat in Islamic Finance",
              key: "fazilat in islamic finance",
            },
            {
              label: "Fazilat in Arabic Language",
              key: "fazilat in arabic language",
            },
          ],
        },
        {
          label: "Arabic Language Courses",
          key: "arabic language courses",
          children: [
            {
              label: "Arabic Foundation Course",
              key: "arabic foundation course",
            },
            { label: "arabic speaking Course", key: "arabic speaking course" },
            { label: "Quranic Arabic Course", key: "quranic arabic course" },
            {
              label: "Calssical Arabic Course",
              key: "classical arabic course",
            },
            { label: "Arabic Grammer Course", key: "arabic grammer course" },
            {
              label: "Arabic Rhetoric (Balaghat) Course",
              key: "arbic rhetoric course",
            },
            {
              label: "Arabic Prosody and Rhyme Course",
              key: "arabic prosody and rhyme course",
            },
          ],
        },
        {
          label: "English Language Courses",
          key: "english language courses",
          children: [
            {
              label: "Elementray English Course",
              key: "elementray english course",
            },
            {
              label: "Intermediate English Course",
              key: "intermediate english course",
            },
            {
              label: "Advanced English Course",
              key: "advanced english course",
            },
          ],
        },
        {
          label: "Urdu Language Courses",
          key: "urdu language courses",
          children: [
            { label: "Elementray Urdu Course", key: "elementray urdu course" },
            {
              label: "Intermediate Urdu Course",
              key: "intermediate urdu course",
            },
            { label: "Advanced Urdu Course", key: "advanced urdu course" },
          ],
        },
        {
          label: "Short Courses",
          key: "short courses",
          children: [
            { label: "Ibadaat Course", key: "Ibadaat course" },
            { label: "zakat Course", key: "zakat course" },
            { label: "Ramazan Special Course", key: "ramazan special course" },
            { label: "Hajj & Umrah Course", key: "hajj & umrah course" },
            {
              label: "Life of Prophet (Seerat) Course",
              key: "life of prophet course",
            },
            {
              label: "Inheritance (Meerath) Course",
              key: "inheritance course",
            },
            { label: "Imamat Course", key: "imamat course" },
          ],
        },
      ],
    },
    {
      label: !isMobile ? (
        "Faculty"
      ) : (
        <span>
          Faculty <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
        </span>
      ),
      key: "faculty",
      children: [
        { label: "Faculty of Quran", key: "faculty of quran" },
        { label: "Faculty of Deeniyat", key: "faculty of deeniyat" },
        { label: "Faculty of Alimiyat", key: "faculty of alimiyat" },
        { label: "Faculty of Fazilat", key: "faculty of fazilat" },
        { label: "Faculty of Language", key: "faculty of language" },
      ],
    },
    {
      label: !isMobile ? (
        "Admission"
      ) : (
        <span>
          Admission <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
        </span>
      ),
      key: "admission",
      children: [
        { label: "Registration", key: "registration" },
        { label: "Tution Fee", key: "tution fee" },
        { label: "Scholarship", key: "scholarship" },
        { label: "Acadmic Calender", key: "acadmic calender" },
      ],
    },
    {
      label: !isMobile ? (
        "Darul Iftah"
      ) : (
        <span>
          Darul Iftah <DownOutlined style={{ fontSize: 10, marginLeft: 4 }} />
        </span>
      ),
      key: "darul iftah",
      children: [
        { label: "Ask Darul Iftah", key: "ask darul iftah" },
        { label: "Iftah Course", key: "iftah course" },
      ],
    },
    { label: <Link to="/contact">Contact</Link>, key: "contact" },
  ];

  return (
    <Wrapper>
      <TopHeader />
      <ContentWrapper>
        {/* Left: Logo */}
        <div style={{ fontWeight: "bold", fontSize: 18 }}>MyLogo</div>

        {/* Right: Menu or Drawer Button */}
        {!isMobile ? (
          <>
            <Button icon={<MenuOutlined />} onClick={toggleDrawer} />
            <Drawer
              title="Menu"
              placement="right"
              onClose={closeDrawer}
              open={open}
            >
              <Menu mode="inline" items={menuItems} onClick={closeDrawer} />
            </Drawer>
          </>
        ) : (
          <Menu
            mode="horizontal"
            items={menuItems}
            style={{ borderBottom: "none" }}
          />
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  width: 100%;
  background: #fff;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  height: 64px;
  padding: 7px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
