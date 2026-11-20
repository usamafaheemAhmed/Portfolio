/* =====================================================================
   TechnicalExpertise.jsx — redesigned "Technical expertise" section
   ---------------------------------------------------------------------
   • Built with Ant Design v5 components (ConfigProvider, Row/Col, Card,
     Tag, Segmented, Statistic, Avatar, Typography, Flex) and
     @ant-design/icons — the same packages your site already uses.
   • Render <TechnicalExpertise /> anywhere. The green theme is applied
     through ConfigProvider, so it does not change the rest of your site.
   • To add a skill or category, edit EXPERTISE_DATA — the filter,
     counters and layout update by themselves.
   • A small CSS block at the bottom handles what Ant Design can't
     (the dark grid card, hover lift, dimming). All classes start with
     "ute-" so they won't clash with your existing styles.
   ===================================================================== */

import React, { useMemo, useState } from "react";
import {
    Avatar,
    Card,
    Col,
    ConfigProvider,
    Flex,
    Row,
    Segmented,
    Statistic,
    Tag,
    Typography,
} from "antd";
import {
    ApiOutlined,
    AppstoreOutlined,
    CloudServerOutlined,
    CodeOutlined,
    DatabaseOutlined,
    ThunderboltOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

/* ------------------------- 1. your skills -------------------------- */

const EXPERTISE_DATA = [
    {
        id: "languages",
        title: "Languages & Core Web",
        short: "Languages",
        icon: <CodeOutlined />,
        skills: ["TypeScript", "JavaScript (ES6+)", "PHP", "C++", "SQL", "HTML5/CSS3"],
    },
    {
        id: "cloud-devops",
        title: "Cloud & DevOps",
        short: "Cloud",
        icon: <CloudServerOutlined />,
        skills: ["AWS", "Azure", "Docker", "GitHub Actions", "Bitbucket Pipelines", "Vercel", "Netlify"],
    },
    {
        id: "databases",
        title: "Databases & Tooling",
        short: "Databases",
        icon: <DatabaseOutlined />,
        skills: ["MongoDB", "PostgreSQL", "SQL", "Git & GitHub", "Postman", "jsPDF"],
    },
    {
        id: "integrations",
        title: "APIs & Integrations",
        short: "APIs",
        icon: <ApiOutlined />,
        skills: ["Gemini AI API", "Zoom API (OAuth 2.0)", "Google Sheets API", "Nango", "Mailchimp"],
    },
    {
        id: "frameworks",
        title: "Frameworks & Libraries",
        short: "Frameworks",
        icon: <AppstoreOutlined />,
        skills: [
            "React.js",
            "Node.js / Express.js",
            "React Native",
            "Laravel",
            "WordPress",
            "Recoil",
            "Ant Design",
            "Formik",
            "Bootstrap",
        ],
    },
];

// Shown in the dark "At a glance" card.
const CORE_STACK = ["MongoDB", "Express.js", "React.js", "Node.js", "React Native"];

/* --------------------------- 2. theme ------------------------------ */

const GREEN = "#16a34a";

const THEME = {
    token: {
        colorPrimary: GREEN,
        colorText: "#12241c",
        colorTextSecondary: "#5b7166",
        colorBorderSecondary: "#dce8e0",
        borderRadiusLG: 20,
        fontFamily: '"Nunito Sans", ui-sans-serif, system-ui, sans-serif',
    },
    components: {
        Card: { paddingLG: 26 },
        Segmented: {
            itemSelectedBg: GREEN,
            itemSelectedColor: "#ffffff",
            trackBg: "#eef5f0",
            trackPadding: 4,
            borderRadius: 999,
            borderRadiusSM: 999,
        },
        Typography: { titleMarginBottom: 0, titleMarginTop: 0 },
    },
};

const pad = (n) => String(n).padStart(2, "0");

/* -------------------------- 3. component --------------------------- */

const TechnicalExpertise = () => {
    const [filter, setFilter] = useState("all");

    const uniqueSkills = useMemo(
        () => new Set(EXPERTISE_DATA.flatMap((c) => c.skills)).size,
        [],
    );

    const options = [
        { label: "All", value: "all", icon: <ThunderboltOutlined /> },
        ...EXPERTISE_DATA.map((c) => ({ label: c.short, value: c.id, icon: c.icon })),
    ];

    // Clicking a card focuses it; clicking it again shows everything.
    const toggle = (id) => setFilter((f) => (f === id ? "all" : id));

    return (
        <ConfigProvider theme={THEME}>
            <section className="ute" aria-label="Technical expertise">
                <style>{CSS}</style>
                <div className="ute-shell">
                    {/* ---------- header ---------- */}
                    <Flex className="ute-head" justify="space-between" align="flex-end" wrap="wrap" gap={20}>
                        <div>
                            <Text className="ute-eyebrow">
                                <span className="ute-eyebrow-line" />
                                Technical expertise
                            </Text>
                            <Title level={2} className="ute-title">
                                Modern stack for <span className="ute-gradient">scalable</span> engineering.
                            </Title>
                        </div>
                        <div className="ute-filter-scroll">
                            <Segmented
                                options={options}
                                value={filter}
                                onChange={setFilter}
                                aria-label="Filter skills by category"
                            />
                        </div>
                    </Flex>

                    {/* ---------- grid ---------- */}
                    <Row gutter={[20, 20]} className="ute-grid">
                        {/* At a glance */}
                        <Col xs={24} md={12} lg={8}>
                            <div className="ute-glance">
                                <Text className="ute-glance-label">At a glance</Text>
                                <Row gutter={16} className="ute-stats">
                                    <Col span={12}>
                                        <Statistic title="Technologies" value={uniqueSkills} suffix="+" />
                                    </Col>
                                    <Col span={12}>
                                        <Statistic title="Categories" value={pad(EXPERTISE_DATA.length)} />
                                    </Col>
                                </Row>
                                <div className="ute-core">
                                    <Text className="ute-glance-label">Core stack · MERN</Text>
                                    <Flex wrap="wrap" gap={8} className="ute-core-tags">
                                        {CORE_STACK.map((s) => (
                                            <Tag key={s} bordered={false} className="ute-core-tag">
                                                {s}
                                            </Tag>
                                        ))}
                                    </Flex>
                                </div>
                            </div>
                        </Col>

                        {/* Categories */}
                        {EXPERTISE_DATA.map((category, index) => {
                            const isActive = filter === category.id;
                            const isDimmed = filter !== "all" && !isActive;
                            return (
                                <Col xs={24} md={12} lg={8} key={category.id}>
                                    <Card
                                        hoverable
                                        onClick={() => toggle(category.id)}
                                        className={`ute-card${isActive ? " is-active" : ""}${isDimmed ? " is-dimmed" : ""}`}
                                        aria-pressed={isActive}
                                    >
                                        <Flex align="center" gap={14}>
                                            <Avatar
                                                shape="square"
                                                size={46}
                                                icon={category.icon}
                                                className="ute-icon"
                                            />
                                            <div className="ute-card-heading">
                                                <Title level={5} className="ute-card-title">
                                                    {category.title}
                                                </Title>
                                                <Text type="secondary" className="ute-count">
                                                    {category.skills.length} skills
                                                </Text>
                                            </div>
                                            <span className="ute-num" aria-hidden="true">
                                                {pad(index + 1)}
                                            </span>
                                        </Flex>

                                        <Flex wrap="wrap" gap={8} className="ute-tags">
                                            {category.skills.map((skill) => (
                                                <Tag
                                                    key={skill}
                                                    color={isActive ? "green" : undefined}
                                                    className="ute-tag"
                                                >
                                                    {skill}
                                                </Tag>
                                            ))}
                                        </Flex>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>

                    <Paragraph type="secondary" className="ute-hint">
                        Tip: pick a category above, or click a card, to focus on it.
                    </Paragraph>
                </div>
            </section>
        </ConfigProvider>
    );
};

export default TechnicalExpertise;

/* ---------------------------- 4. styles ---------------------------- */
/* Only what Ant Design's theme can't do. Fonts: Lexend (headings) and
   Nunito Sans (text) — same as your Contact and Projects sections.   */

const CSS = `
@import url("https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700&family=Nunito+Sans:wght@400;600;700&display=swap");

.ute { padding: 40px 20px; }
.ute-shell { max-width: 1100px; margin: 0 auto; }

/* header */
.ute-head { margin-bottom: 28px; }
.ute-eyebrow {
  display: inline-flex; align-items: center; gap: 10px;
  font-size: 12px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase;
  color: ${GREEN} !important;
}
.ute-eyebrow-line { width: 28px; height: 2px; border-radius: 2px; background: ${GREEN}; }
.ute .ute-title {
  margin-top: 12px !important; font-family: Lexend, ui-sans-serif, system-ui, sans-serif;
  font-weight: 700; font-size: clamp(28px, 4vw, 38px); line-height: 1.1; max-width: 560px;
}
.ute-gradient {
  background: linear-gradient(100deg, ${GREEN}, #4ade80);
  -webkit-background-clip: text; background-clip: text; color: transparent;
}
.ute-filter-scroll { max-width: 100%; overflow-x: auto; scrollbar-width: none; }
.ute-filter-scroll::-webkit-scrollbar { display: none; }
.ute .ant-segmented { font-weight: 600; }
.ute .ant-segmented-item-label { padding: 0 14px; }

/* At a glance — dark card, matches the Contact panel */
.ute-glance {
  position: relative; box-sizing: border-box; height: 100%; min-height: 260px; overflow: hidden;
  display: flex; flex-direction: column; gap: 22px;
  padding: 26px; border-radius: 20px; color: #f2faf5;
  background:
    radial-gradient(420px 220px at 100% 0%, rgba(74,222,128,.22), transparent 70%),
    radial-gradient(300px 200px at 0% 100%, rgba(22,163,74,.25), transparent 70%),
    #10231c;
  box-shadow: 0 24px 50px -24px rgba(16,35,28,.55);
}
.ute-glance::before {
  content: ""; position: absolute; inset: 0; pointer-events: none;
  background-image:
    linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
  background-size: 36px 36px;
  mask-image: linear-gradient(to bottom, #000, transparent 85%);
}
.ute-glance > * { position: relative; }
.ute-glance-label {
  display: block; font-size: 11px; font-weight: 700; letter-spacing: .18em;
  text-transform: uppercase; color: #a8c4b5 !important;
}
.ute-stats .ant-statistic-title { color: #a8c4b5; font-size: 13px; margin-bottom: 2px; }
.ute-stats .ant-statistic-content {
  color: #f2faf5; font-family: Lexend, ui-sans-serif, sans-serif; font-weight: 700; font-size: 40px;
}
.ute-stats .ant-statistic-content-suffix { color: #4ade80; }
.ute-core { margin-top: auto; }
.ute-core-tags { margin-top: 10px; }
.ute .ute-core-tag {
  margin: 0; padding: 3px 11px; border-radius: 999px; font-size: 12.5px; font-weight: 600;
  color: #f2faf5; background: rgba(255,255,255,.08); border: 1px solid rgba(255,255,255,.12);
}

/* category cards */
.ute .ute-card {
  height: 100%; border: 1px solid #dce8e0; background: #fff;
  box-shadow: 0 10px 30px -18px rgba(16,35,28,.25);
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease, opacity .25s ease;
}
.ute .ute-card:hover { transform: translateY(-3px); border-color: rgba(22,163,74,.45); }
.ute .ute-card.is-active {
  border-color: ${GREEN};
  box-shadow: 0 0 0 4px rgba(22,163,74,.12), 0 20px 40px -20px rgba(22,163,74,.45);
}
.ute .ute-card.is-dimmed { opacity: .4; }
.ute .ute-card.is-dimmed:hover { opacity: .8; }
.ute .ute-icon { background: #e7f6ec; color: ${GREEN}; border-radius: 14px; font-size: 20px; flex-shrink: 0; }
.ute .ute-card.is-active .ute-icon { background: ${GREEN}; color: #fff; }
.ute-card-heading { min-width: 0; flex: 1; }
.ute .ute-card-title { font-family: Lexend, ui-sans-serif, sans-serif; font-weight: 600; font-size: 16px; }
.ute-count { font-size: 12.5px; }
.ute-num {
  align-self: flex-start; font-family: Lexend, ui-sans-serif, sans-serif; font-weight: 700;
  font-size: 13px; color: #c3d6cb; letter-spacing: .05em;
}
.ute-tags { margin-top: 20px; }
.ute .ute-tag {
  margin: 0; padding: 3px 10px; border-radius: 8px; font-size: 12.5px; font-weight: 600;
  background: #f5f9f6; border-color: #dce8e0; color: #3b5247;
}
.ute .ute-tag.ant-tag-green { background: #e7f6ec; border-color: #9fd9b2; color: #166534; }

.ute-hint { margin: 18px 0 0 !important; font-size: 13px; text-align: center; }

@media (max-width: 575px) {
  .ute { padding: 32px 16px; }
  .ute-glance { min-height: 0; }
  .ute-stats .ant-statistic-content { font-size: 34px; }
}
@media (prefers-reduced-motion: reduce) {
  .ute .ute-card { transition: none; }
  .ute .ute-card:hover { transform: none; }
}
`;