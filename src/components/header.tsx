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
              label: <Link to="/noorani-qaedah">Noorani Qa'edah Course</Link>,
              key: "noorani qa'edah course",
            },
            {
              label: (
                <Link to="/recitation-course">Quran Recitation Course</Link>
              ),
              key: "quran recitation course",
            },
            {
              label: (
                <Link to="/memorization-course">Quran Memorition Course</Link>
              ),
              key: "quran memorization course",
            },
            {
              label: <Link to="/tajweed-course">Tajweed Course</Link>,
              key: "tajweed course",
            },
            {
              label: <Link to="/seven-qiraat">Seven Qiraats Course</Link>,
              key: "seven qiraats course",
            },
            {
              label: <Link to="/ijazah-program">Quran Ijazah Course</Link>,
              key: "quran ijazah course",
            },
            {
              label: (
                <Link to="translation-course">Quran's Translation Course</Link>
              ),
              key: "quran's translation course",
            },
            {
              label: <Link to="/tafseer-course">Tafseer Course</Link>,
              key: "tafseer course",
            },
          ],
        },
        {
          label: "Deeniyat Courses",
          key: "deeniyat courses",
          children: [
            {
              label: <Link to="deeniyat-for-kids">Deeniyat For Kids</Link>,
              key: "deeniyat for kids",
            },
            {
              label: <Link to="/deeniyat-for-men">Deeniyat For Men</Link>,
              key: "deeniyat for men",
            },
            {
              label: <Link to="/deeniyat-for-women">Deeniyat For Women</Link>,
              key: "deeniyat for women",
            },
          ],
        },
        {
          label: "Alimiyat Courses",
          key: "alimiyat courses",
          children: [
            {
              label: <Link to="/dars-e-nizami">Dars-e-Nizami Carriculum</Link>,
              key: "dars-e-nizami carriculum",
            },
            {
              label: <Link to="/modern-curriculum">Modern Carriculum</Link>,
              key: "modern carriculum",
            },
          ],
        },
        {
          label: "Fazilat Courses",
          key: "fazilat courses",
          children: [
            {
              label: (
                <Link to="/fazilat-in-tafsir">Fazilat in Quranic Science</Link>
              ),
              key: "fazilat in quranic science",
            },
            {
              label: (
                <Link to="/fazilat-in-hadith">Fazilat in Hadith Science</Link>
              ),
              key: "fazilat in hadith science",
            },
            {
              label: (
                <Link to="/fazilat-in-islamic">
                  Fazilat in Islamic Jurisprudence
                </Link>
              ),
              key: "fazilat in islamic jurisprudence",
            },
            {
              label: <Link to="/fazilat-in-theology">Fazilat in Theology</Link>,
              key: "fazilat in theology",
            },
            {
              label: (
                <Link to="/fazilat-in-islamic-finance">
                  Fazilat in Islamic Finance
                </Link>
              ),
              key: "fazilat in islamic finance",
            },
            {
              label: (
                <Link to="/fazilat-in-arabic-language">
                  Fazilat in Arabic Language
                </Link>
              ),
              key: "fazilat in arabic language",
            },
          ],
        },
        {
          label: "Arabic Language Courses",
          key: "arabic language courses",
          children: [
            {
              label: (
                <Link to="/arabic-language-course">
                  Arabic Foundation Course
                </Link>
              ),
              key: "arabic foundation course",
            },
            {
              label: (
                <Link to="/arabic-speaking-course">arabic speaking Course</Link>
              ),
              key: "arabic speaking course",
            },
            {
              label: (
                <Link to="/quranic-arabic-course">Quranic Arabic Course</Link>
              ),
              key: "quranic arabic course",
            },
            {
              label: (
                <Link to="/classical-arabic-course">
                  Calssical Arabic Course
                </Link>
              ),
              key: "classical arabic course",
            },
            {
              label: (
                <Link to="/arabic-grammar-course">Arabic Grammer Course</Link>
              ),
              key: "arabic grammer course",
            },
            {
              label: (
                <Link to="/arabic-blaghat-course">
                  Arabic Rhetoric (Balaghat) Course
                </Link>
              ),
              key: "arbic rhetoric course",
            },
            {
              label: (
                <Link to="/arabic-arooz-qafiyah-course">
                  Arabic Prosody and Rhyme Course
                </Link>
              ),
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
