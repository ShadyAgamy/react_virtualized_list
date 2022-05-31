import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

function TicketForm({ initialValues, onSubmit }) {
  const [subject, setsubject] = useState("");
  const [priority, setPriority] = useState("");
  const [status, setStatus] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (initialValues) {
      const { subject, priority, status, description } = initialValues;
      setsubject(subject);
      setPriority(priority);
      setStatus(status);
      setDescription(description);
    }
  }, [initialValues]);

  const formSubmit = (e) => {
    e.preventDefault();
    setsubject("");
    setPriority("");
    setStatus("");
    setDescription("");
    onSubmit({ subject, priority, status, description })
  };
  return (
    <Row className="mt-5">
      <Col md={{ span: 8, offset: 2 }}>
        <Form onSubmit={formSubmit}>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={2}>
              subject
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                required
                type="text"
                value={subject}
                placeholder="Enter subject"
                onChange={(e) => setsubject(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={2}>
              Priority
            </Form.Label>
            <Col sm={10}>
              <Form.Select required value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option disabled selected value="">
                  Select Priority
                </option>
                <option value="Urgent">Urgent</option>
                <option value="Not urgent">Not urgent</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={2}>
              Status
            </Form.Label>
            <Col sm={10}>
              <Form.Select required value={status} onChange={(e) => setStatus(e.target.value)}>
                <option disabled selected value="">
                  Select Status
                </option>
                <option value="Open">Open</option>
                <option value="Closed">Closed</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-4">
            <Form.Label column sm={2}>
              Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                required
                value={description}
                placeholder="Enter description"
                as="textarea"
                rows={5}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Col>
          </Form.Group>

          <Button className="d-block ms-auto " variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Row>
  );
}

export default TicketForm;
