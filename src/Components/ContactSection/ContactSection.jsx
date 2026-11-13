import { Col, Row, Typography, Card, Form, Input, Button, message } from 'antd'
import { MailOutlined, LinkedinOutlined, GithubOutlined, FacebookFilled, EnvironmentOutlined, SendOutlined, CheckCircleFilled } from '@ant-design/icons'
import React, { useState } from 'react'

const { Title, Paragraph } = Typography
const { TextArea } = Input

const ContactSection = () => {
    const [form] = Form.useForm()
    const [loading, setLoading] = useState(false)

    const onFinish = (values) => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
            message.success('Thank you! Your message has been dispatched successfully.')
            form.resetFields()
        }, 1500)
    }

    return (
        <section className="landing-contact-section mb-5" id="contact" aria-label="Contact Section">
            <div className="contact-ambient-glow"></div>

            <Row gutter={[48, 48]} align="middle" className="contact-inner-row">
                {/* Left Column: Bold Statement & Direct Info */}
                <Col xs={24} lg={11} className="contact-left-col">
                    <div className="contact-badge-wrapper">
                        <span className="live-status-dot"></span>
                        <span className="live-status-text">AVAILABLE FOR OPPORTUNITIES</span>
                    </div>

                    <Title level={2} className="contact-main-title">
                        Let's build something <span className="title-highlight">exceptional</span> together.
                    </Title>

                    <Paragraph className="contact-subtitle">
                        Whether you have a complex SaaS product to scale, an engineering role to fill, or an innovative idea—let’s connect and make it happen.
                    </Paragraph>

                    <div className="contact-direct-cards">
                        <a href="mailto:me@usamafaheemahmed.com" className="direct-card-item">
                            <div className="contact-icon-box">
                                <MailOutlined />
                            </div>
                            <div className="direct-info">
                                <span className="info-label">Direct Inquiries</span>
                                <span className="info-value">me@usamafaheemahmed.com</span>
                            </div>
                        </a>

                        <div className="direct-card-item">
                            <div className="contact-icon-box">
                                <EnvironmentOutlined />
                            </div>
                            <div className="direct-info">
                                <span className="info-label">Base Location</span>
                                <span className="info-value">Lahore, Pakistan</span>
                            </div>
                        </div>
                    </div>

                    <div className="contact-socials-group">
                        <span className="info-label">Verified Networks</span>
                        <div className="social-buttons-row">
                            <Button
                                icon={<LinkedinOutlined />}
                                href="https://linkedin.com/in/usama-faheem-ahmed-a1960b1b9/"
                                target="_blank"
                                rel="noreferrer"
                                className="brand-social-btn btn-linkedin"
                            >
                                LinkedIn
                            </Button>
                            <Button
                                icon={<GithubOutlined />}
                                href="https://github.com/usamafaheemAhmed"
                                target="_blank"
                                rel="noreferrer"
                                className="brand-social-btn btn-github"
                            >
                                GitHub
                            </Button>
                            <Button
                                icon={<FacebookFilled />}
                                href="https://facebook.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="brand-social-btn btn-facebook"
                            >
                                Facebook
                            </Button>
                        </div>
                    </div>
                </Col>

                {/* Right Column: Premium Form Card */}
                <Col xs={24} lg={13}>
                    <Card className="contact-form-card" bordered={false}>
                        <div className="form-card-header">
                            <Title level={3} className="form-title">Send a Message</Title>
                            <Paragraph className="form-desc">Fill out the form and I'll get back to you within 24 hours.</Paragraph>
                        </div>

                        <Form
                            form={form}
                            layout="vertical"
                            onFinish={onFinish}
                            requiredMark={false}
                        >
                            <Row gutter={16}>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="name"
                                        label="Your Name"
                                        rules={[{ required: true, message: 'Please enter your name!' }]}
                                    >
                                        <Input placeholder="John Doe" className="contact-input" />
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={12}>
                                    <Form.Item
                                        name="email"
                                        label="Your Email"
                                        rules={[
                                            { required: true, message: 'Please enter your email!' },
                                            { type: 'email', message: 'Please enter a valid email address!' }
                                        ]}
                                    >
                                        <Input placeholder="john@example.com" className="contact-input" />
                                    </Form.Item>
                                </Col>
                            </Row>

                            <Form.Item
                                name="subject"
                                label="Subject / Project Type"
                                rules={[{ required: true, message: 'Please specify a subject!' }]}
                            >
                                <Input placeholder="Full-Stack Engineering Role / SaaS Project" className="contact-input" />
                            </Form.Item>

                            <Form.Item
                                name="message"
                                label="Message"
                                rules={[{ required: true, message: 'Please write your message!' }]}
                            >
                                <TextArea rows={4} placeholder="Tell me about the timeline, tech stack, or opportunity..." className="contact-input" />
                            </Form.Item>

                            <Form.Item className="form-submit-wrapper">
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    loading={loading}
                                    icon={<SendOutlined />}
                                    className="contact-submit-btn"
                                    block
                                >
                                    Send Dispatch Message
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Col>
            </Row>
        </section>
    )
}

export default ContactSection