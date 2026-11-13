import { Col, Layout, Menu, Row, Typography } from 'antd'
import './LandingPage.css'
import HeroSection from './HeroSection/HeroSection'
import InteractiveBackground from './InteractiveBackground/InteractiveBackground'
import StatesSection from './StatesSection/StatesSection'
import AboutSection from './AboutSection/AboutSection'
import FeaturedProjects from './FeaturedProjects/FeaturedProjects'
import TechnicalExpertise from './TechnicalExpertise/TechnicalExpertise'
import ContactSection from './ContactSection/ContactSection'

const { Header, Content, Footer } = Layout
const { Title, Paragraph } = Typography

const navigationItems = [
    { key: 'home', label: <a className="landing-menu-link" href="#home">Home</a> },
    { key: 'about', label: <a className="landing-menu-link" href="#about">About</a> },
    { key: 'projects', label: <a className="landing-menu-link" href="#projects">Projects</a> },
    { key: 'contact', label: <a className="landing-menu-link" href="#contact">Contact</a> },
]

const LandingPage = () => {
    return (
        <Layout className="landing-layout">
            <Header className="landing-topbar">
                <a className="landing-brand" href="#home">
                    Usama <span>Faheem Ahmed</span>
                </a>
                <nav aria-label="Main navigation">
                    <Menu
                        className="landing-menu"
                        mode="horizontal"
                        items={navigationItems}
                        selectable={false}
                    />
                </nav>
            </Header>
            <InteractiveBackground />
            <Content className="landing-content"
                style={{
                    // position: 'relative',
                    zIndex: 10,
                    background: 'transparent' // Let canvas show through
                }}>
                <main className="landing-container">
                    <HeroSection />

                    <StatesSection />

                    <AboutSection />

                    <FeaturedProjects />

                    <TechnicalExpertise />

                    <ContactSection />

                </main>
            </Content>

            <Footer className="landing-footer" id="contact">
                <div className="landing-footer-inner">
                    <span>Have a project in mind?</span>
                    <a href="mailto:hello@usamafaheem.dev">Let&apos;s talk</a>
                    <span className="landing-copyright">
                        © {new Date().getFullYear()} Usama Faheem Ahmed
                    </span>
                </div>
            </Footer>
        </Layout>
    )
}

export default LandingPage
