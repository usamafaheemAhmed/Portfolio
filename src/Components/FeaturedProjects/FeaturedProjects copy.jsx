import { Col, Row, Typography, Card, Tag, Button, Carousel } from 'antd'
import { ArrowRightOutlined, GithubOutlined, LinkOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons'
import React, { useRef } from 'react'

const { Title, Paragraph } = Typography

// 1. Scalable Projects Data Source
const PROJECTS_DATA = [
    {
        id: 'flatally',
        title: 'FlatAlly – AI Roommate Matching',
        description: 'Architected a full-stack peer matching platform using React, Node.js, and MongoDB. Designed a custom preference-vector algorithm for accurate candidate matching and integrated automated Zoom video scheduling via OAuth 2.0.',
        tags: [
            { label: 'MERN Stack', color: 'success' },
            { label: 'AWS', color: 'default' },
            { label: 'Zoom API (OAuth 2.0)', color: 'default' }
        ],
        image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80',
        github: 'https://github.com/usamafaheemAhmed',
        demo: '#'
    },
    {
        id: 'ai-resume-analyzer',
        title: 'AI Resume Analyzer Dashboard',
        description: 'Developed an engineering CV analysis tool leveraging the Gemini API to parse text ingestion streams from web URLs with minimal server overhead, paired with a real-time scoring dashboard.',
        tags: [
            { label: 'React.js', color: 'success' },
            { label: 'Gemini API', color: 'default' },
            { label: 'Recoil & AntD', color: 'default' }
        ],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
        github: 'https://github.com/usamafaheemAhmed',
        demo: '#'
    }
    // You can easily add more project objects here in the future without touching the layout code!
]

const FeaturedProjects = () => {
    const carouselRef = useRef(null)

    return (
        <section className="landing-projects-section" aria-label="Featured Projects">
            <div className="projects-header">
                <div>
                    <Paragraph className="landing-eyebrow">FEATURED WORK</Paragraph>
                    <Title level={2} className="projects-main-title">
                        Building intelligent platforms & apps.
                    </Title>
                </div>
                <div className="carousel-nav-buttons">
                    <Button
                        shape="circle"
                        icon={<LeftOutlined />}
                        onClick={() => carouselRef.current?.prev()}
                        className="nav-btn"
                        aria-label="Previous project"
                    />
                    <Button
                        shape="circle"
                        icon={<RightOutlined />}
                        onClick={() => carouselRef.current?.next()}
                        className="nav-btn"
                        aria-label="Next project"
                    />
                    <Button type="link" className="view-all-btn" icon={<ArrowRightOutlined />}>
                        View All Projects
                    </Button>
                </div>
            </div>

            {/* Scalable Ant Design Carousel */}
            <Carousel
                ref={carouselRef}
                dots={{ className: 'custom-carousel-dots' }}
                autoplay
                autoplaySpeed={5000}
                effect="scrollx"
            >
                {PROJECTS_DATA.map((project) => (
                    <div key={project.id} className="carousel-slide-item">
                        <Card className="project-card-horizontal" bordered={false}>
                            <Row gutter={[32, 32]} align="middle">
                                <Col xs={24} lg={12}>
                                    <div className="project-image-wrapper">
                                        <img
                                            src={project.image}
                                            alt={`${project.title} Preview`}
                                            className="project-featured-img"
                                        />
                                    </div>
                                </Col>
                                <Col xs={24} lg={12}>
                                    <div className="project-content-wrapper">
                                        <div className="project-tags">
                                            {project.tags.map((tag, idx) => (
                                                <Tag key={idx} color={tag.color}>
                                                    {tag.label}
                                                </Tag>
                                            ))}
                                        </div>
                                        <Title level={3} className="project-title">{project.title}</Title>
                                        <Paragraph className="project-desc">
                                            {project.description}
                                        </Paragraph>
                                        <div className="project-links">
                                            <a href={project.github} target="_blank" rel="noreferrer" className="project-link-item">
                                                <GithubOutlined /> Codebase
                                            </a>
                                            <a href={project.demo} target="_blank" rel="noreferrer" className="project-link-item">
                                                <LinkOutlined /> Live Demo
                                            </a>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default FeaturedProjects