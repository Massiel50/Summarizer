import React from "react";

function dashboard () {
  return (
  <><div className="dashcard" /><div>
    <Card body>
    <Form.Control type="text" placeholder="Readonly input here..." readOnly />
    <>
  <Button variant="primary" size="lg" active>
    Primary button
  </Button>{' '}
  <Button variant="secondary" size="lg" active>
    Button
  </Button>
</>
    </Card>
  </div></>
  )
};

export default dashboard;