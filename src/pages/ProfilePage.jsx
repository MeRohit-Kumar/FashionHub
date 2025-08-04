import React, { useState, useEffect } from "react";
import {Tab,Tabs,Card,Row,Col,Form,Button,Badge,Navbar,Container,Modal,} from "react-bootstrap";
import {FaEnvelope,FaPhone,FaMapMarkerAlt,FaSave,FaUser,FaSignOutAlt,FaArrowCircleDown,FaLinkedin,FaGithub,FaTwitter,} from "react-icons/fa";
import profileData from "../data/profileData.json";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);
  const [editableProfile, setEditableProfile] = useState(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * profileData.length);
    const selectedProfile = profileData[randomIndex];
    setProfile(selectedProfile);
    setEditableProfile({ ...selectedProfile });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    setProfile(editableProfile);
    alert("Profile changed successfully");
  };

  const handleLogout = () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    localStorage.clear();
    setProfile(null);
    setShowLogoutModal(false);
    navigate("/login");
  };

  if (!profile) return <p>Loading...</p>;

  return (
    <div
      className="container-fluid min-vh-100 py-5"
      style={{
        background: "linear-gradient(to bottom, #02c7c4ff, #d387c9ff)",
        borderRadius: "10px",
        marginTop: "50px",
      }}
    >
      <Navbar bg="light" className="mb-4 shadow-lg">
        <Container fluid>
          <Navbar.Brand className="fw-bold">My Profile</Navbar.Brand>
          <Button variant="outline-danger" onClick={handleLogout}>
            <FaSignOutAlt className="me-2" />
            Logout
          </Button>
        </Container>
      </Navbar>

      
      <Modal
        show={showLogoutModal}
        onHide={() => setShowLogoutModal(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm Logout</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to logout?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLogoutModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmLogout}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="container">
        <Tabs defaultActiveKey="profile" id="profile-tabs" className="mb-4">
          <Tab eventKey="profile" title="Profile">
            <Card className="p-4 shadow rounded mb-4">
              <Row>
                <Col md={4} className="text-center mb-3">
                  <img
                    src={profile.image}
                    alt="Profile"
                    className="rounded-circle border border-3"
                    width={160}
                    height={160}
                    style={{ objectFit: "cover" }}
                  />
                  <h4 className="mt-3">
                    <FaUser className="me-2 text-primary" />
                    {profile.name}
                  </h4>
                  <p className="text-muted">{profile.role}</p>
                  <Badge bg="success" pill className="mb-2">
                    {profile.status}
                  </Badge>
                </Col>
                <Col md={8}>
                  <Row className="mb-3">
                    <Col md={6}>
                      <p>
                        <FaEnvelope className="me-2 text-secondary" />
                        <strong>Email:</strong> {profile.email}
                      </p>
                      <p>
                        <FaPhone className="me-2 text-secondary" />
                        <strong>Contact:</strong> {profile.contact}
                      </p>
                    </Col>
                    <Col md={6}>
                      <p>
                        <FaMapMarkerAlt className="me-2 text-secondary" />
                        <strong>Location:</strong> {profile.location}
                      </p>
                      <p>
                        <FaArrowCircleDown className="me-2 text-secondary" />
                        <strong>Status:</strong> {profile.status}
                      </p>
                    </Col>
                  </Row>

                  <div className="mt-3">
                    <h5 className="text-muted-0">Profile Summary</h5>
                    <p>{profile.summary}</p>
                  </div>
                </Col>
              </Row>
            </Card>
            <Card className="p-3 shadow-sm rounded mb-4">
              <h5 className="text-primary">Skills</h5>
              <div className="d-flex flex-wrap gap-2">
                {profile.skills?.map((skill, index) => (
                  <Badge key={index} bg="info" className="fs-6">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
            <Card className="p-3 shadow-sm rounded mb-4">
              <h5 className="text-primary">Recent Activities</h5>
              <ul className="ps-3">
                {profile.activities?.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </Card>
            <Card className="p-3 shadow-sm rounded mb-4">
              <h5 className="text-primary">Social Profiles</h5>
              <div className="d-flex gap-3 fs-4">
                {profile.social?.linkedin && (
                  <a
                    href={profile.social.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-decoration-none text-primary"
                  >
                    <FaLinkedin />
                  </a>
                )}
                {profile.social?.github && (
                  <a
                    href={profile.social.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-dark"
                  >
                    <FaGithub />
                  </a>
                )}
                {profile.social?.twitter && (
                  <a
                    href={profile.social.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="text-info"
                  >
                    <FaTwitter />
                  </a>
                )}
              </div>
            </Card>
          </Tab>

          <Tab eventKey="edit" title="Edit Profile">
            <Card className="p-4 shadow rounded">
              <Form>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={editableProfile.name}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={editableProfile.email}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Contact</Form.Label>
                      <Form.Control
                        type="text"
                        name="contact"
                        value={editableProfile.contact}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type="text"
                        name="role"
                        value={editableProfile.role}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        type="text"
                        name="location"
                        value={editableProfile.location}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                    <Form.Group className="mb-3">
                      <Form.Label>Status</Form.Label>
                      <Form.Control
                        type="text"
                        name="status"
                        value={editableProfile.status}
                        onChange={handleInputChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <div className="text-end">
                  <Button variant="primary" onClick={handleSave}>
                    <FaSave className="me-2" />
                    Save Changes
                  </Button>
                </div>
              </Form>
            </Card>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;
