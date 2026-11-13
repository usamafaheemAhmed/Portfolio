import { Col, Row, Typography, Card, Tag } from 'antd'
import {
    CodeOutlined,
    AppstoreOutlined,
    CloudServerOutlined,
    DatabaseOutlined,
    ApiOutlined
} from '@ant-design/icons'
import React from 'react'

const { Title, Paragraph } = Typography

// Scalable Skills Data Source
const EXPERTISE_DATA = [
    {
        id: 'languages',
        title: 'Languages & Core Web',
        icon: <CodeOutlined />,
        skills: ['TypeScript', 'JavaScript (ES6+)', 'PHP', 'C++', 'SQL', 'HTML5/CSS3']
    },

    {
        id: 'cloud-devops',
        title: 'Cloud & DevOps',
        icon: <CloudServerOutlined />,
        skills: ['AWS', 'Azure', 'Docker', 'GitHub Actions', 'Bitbucket Pipelines', 'Vercel', 'Netlify']
    },
    {
        id: 'databases',
        title: 'Databases & Tooling',
        icon: <DatabaseOutlined />,
        skills: ['MongoDB', 'PostgreSQL', 'SQL', 'Git & GitHub', 'Postman', 'jsPDF']
    },
    {
        id: 'integrations',
        title: 'APIs & Integrations',
        icon: <ApiOutlined />,
        skills: ['Gemini AI API', 'Zoom API (OAuth 2.0)', 'Google Sheets API', 'Nango', 'Mailchimp']
    },
    {
        id: 'frameworks',
        title: 'Frameworks & Libraries',
        icon: <AppstoreOutlined />,
        skills: ['React.js', 'Node.js / Express.js', 'React Native', 'Laravel', 'WordPress', 'Recoil', 'Ant Design', 'Formik', 'Bootstrap']
    },
]

const TechnicalExpertise = () => {
    return (
        <section className="landing-expertise-section" aria-label="Technical Expertise">
            <div className="expertise-header">
                <Paragraph className="landing-eyebrow">TECHNICAL EXPERTISE</Paragraph>
                <Title level={2} className="expertise-main-title">
                    Modern stack for scalable engineering.
                </Title>
            </div>

            <Row gutter={[24, 24]} className="expertise-grid">
                {EXPERTISE_DATA.map((category, index) => (
                    <Col
                        xs={24}
                        md={12}
                        lg={EXPERTISE_DATA.length - 1 === index ? 24 : 12}
                        key={category.id}
                    >
                        <Card className="expertise-card" bordered={false}>
                            <div className="expertise-card-top">
                                <span className="expertise-icon">{category.icon}</span>
                                <Title level={4} className="expertise-category-title">
                                    {category.title}
                                </Title>
                            </div>
                            <div className="expertise-tags">
                                {category.skills.map((skill, index) => (
                                    <Tag key={index} className="skill-pill">
                                        {skill}
                                    </Tag>
                                ))}
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    )
}

export default TechnicalExpertise