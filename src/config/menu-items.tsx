import { DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export const getMenuItems = (isMobile: boolean) => [
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
            label: <Link to="/recitation-course">Quran Recitation Course</Link>,
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
              <Link to="/arabic-language-course">Arabic Foundation Course</Link>
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
              <Link to="/classical-arabic-course">Calssical Arabic Course</Link>
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
            label: (
              <Link to="/elementary-english-course">
                Elementray English Course
              </Link>
            ),
            key: "elementray english course",
          },
          {
            label: (
              <Link to="/intermediate-english-course">
                Intermediate English Course
              </Link>
            ),
            key: "intermediate english course",
          },
          {
            label: (
              <Link to="/advanced-english-course">Advanced English Course</Link>
            ),
            key: "advanced english course",
          },
        ],
      },
      {
        label: "Urdu Language Courses",
        key: "urdu language courses",
        children: [
          {
            label: (
              <Link to="/elementary-urdu-course">Elementray Urdu Course</Link>
            ),
            key: "elementray urdu course",
          },
          {
            label: (
              <Link to="/intermediate-urdu-course">
                Intermediate Urdu Course
              </Link>
            ),
            key: "intermediate urdu course",
          },
          {
            label: <Link to="/advanced-urdu-course">Advanced Urdu Course</Link>,
            key: "advanced urdu course",
          },
        ],
      },
      {
        label: "Short Courses",
        key: "short courses",
        children: [
          {
            label: <Link to="/ibadaat-course">Ibadaat Course</Link>,
            key: "Ibadaat course",
          },
          {
            label: <Link to="/zakat-course">zakat Course</Link>,
            key: "zakat course",
          },
          {
            label: (
              <Link to="/ramadan-special-course">Ramazan Special Course</Link>
            ),
            key: "ramazan special course",
          },
          {
            label: <Link to="/hajj-&-umrah-course">Hajj & Umrah Course</Link>,
            key: "hajj & umrah course",
          },
          {
            label: (
              <Link to="/seerat-course">Life of Prophet (Seerat) Course</Link>
            ),
            key: "life of prophet course",
          },
          {
            label: (
              <Link to="/inheritance-course">Inheritance (Meerath) Course</Link>
            ),
            key: "inheritance course",
          },
          {
            label: <Link to="/imamat-course">Imamat Course</Link>,
            key: "imamat course",
          },
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
      {
        label: <Link to="/faculty-of-quran">Faculty of Quran</Link>,
        key: "faculty of quran",
      },
      {
        label: <Link to="/faculty-of-deeniyat">Faculty of Deeniyat</Link>,
        key: "faculty of deeniyat",
      },
      {
        label: <Link to="/faculty-of-alimiyat">Faculty of Alimiyat</Link>,
        key: "faculty of alimiyat",
      },
      {
        label: <Link to="/faculty-of-fazilat">Faculty of Fazilat</Link>,
        key: "faculty of fazilat",
      },
      {
        label: <Link to="/faculty-of-language">Faculty of Language</Link>,
        key: "faculty of language",
      },
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
      {
        label: <Link to="/registration">Registration</Link>,
        key: "registration",
      },
      { label: <Link to="/tution-fee">Tution Fee</Link>, key: "tution fee" },
      {
        label: <Link to="/scholarship-program">Scholarship</Link>,
        key: "scholarship",
      },
      {
        label: <Link to="/acadmic-calendar">Acadmic Calender</Link>,
        key: "acadmic calender",
      },
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
      {
        label: <Link to="/darul-ifta">Ask Darul Iftah</Link>,
        key: "ask darul ifta",
      },
      {
        label: <Link to="/ifta-course">Iftah Course</Link>,
        key: "ifta course",
      },
    ],
  },
  { label: <Link to="/contact">Contact</Link>, key: "contact" },
];
