// UI frameworks
import { Row, Col } from "antd";

export const GridHomework = () => {
  return (
    <div className="bg-dark">
      <Row gutter={[0, { md: 16, sm: 24 }]}>
        <Col
          sm={{ span: 6, offset: 3, order: 2 }}
          md={{ span: 4, order: 0, offset: 1 }}
        >
          <div className="bg-primary text-light border">1</div>
        </Col>
        <Col md={{ span: 6, offset: 4, order: 1 }} sm={{ span: 9, order: 3 }}>
          <div className="bg-primary text-light border">2</div>
        </Col>
        <Col md={{ span: 2, offset: 6, order: 2 }} sm={{ span: 12, order: 0 }}>
          <div className="bg-primary text-light border">3</div>
        </Col>
        <Col md={{ span: 6, offset: 4, order: 3 }} sm={{ span: 18, order: 4 }}>
          <div className="bg-primary text-light border">4</div>
        </Col>
        <Col
          md={{ span: 8, offset: 4, order: 4 }}
          sm={{ span: 6, offset: 6, order: 1 }}
        >
          <div className="bg-primary text-light border">5</div>
        </Col>
        <Col
          md={{ span: 4, offset: 10, order: 5 }}
          sm={{ span: 12, offset: 12, order: 5 }}
        >
          <div className="bg-primary text-light border">6</div>
        </Col>
      </Row>
    </div>
  );
};
