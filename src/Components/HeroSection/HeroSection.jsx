import { Button, Col, Row, Space, Typography } from 'antd'
import profileImage from '../.././../public/profileImage_nobg2.png'
import { HiDownload } from 'react-icons/hi'
// import profileImage from '../.././../public/green.jpg'

const { Title, Paragraph } = Typography

const HeroSection = () => {
    return (
        <section className="landing-hero" id="home">
            <Row align="middle" gutter={[32, 32]}>
                <Col md={24}>
                    <Paragraph className="landing-eyebrow">WELCOME TO MY PORTFOLIO</Paragraph>
                    <Title className="landing-title">
                        Building thoughtful
                        <br />
                        <span>digital experiences.</span>
                    </Title>
                    <Paragraph className="landing-description">
                        I&apos;m Usama Faheem Ahmed, a developer who turns ideas into clear, useful, and
                        engaging web experiences.
                    </Paragraph>
                    <Space size="middle" wrap>
                        <Button className="landing-primary-button" type="primary" href="#projects">
                            View my work
                        </Button>
                        <Button
                            type="default"
                            size="large"
                            icon={<HiDownload />}
                            href="./Usama Faheem Ahmed ATS Full Stack Resume.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="hero-download-btn"
                        >
                            Download CV
                        </Button>
                    </Space>
                </Col>


                <img
                    className="landing-portrait"
                    src={profileImage}
                    alt="Usama"
                />
            </Row>
        </section>
    )
}

export default HeroSection