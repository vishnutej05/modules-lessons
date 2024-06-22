import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Course from '../../pages/Course';

function CourseLeaderbard() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button className='btn-light' onClick={() => setLgShow(true)}>Show Leaderboard</Button>

      <Modal
        size="xl"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
        style = {{marginTop: "5%"}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            LeaderBoard
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <Course/>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CourseLeaderbard;