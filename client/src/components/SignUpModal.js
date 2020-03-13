import React from 'react';
import { Modal, Button } from 'react-materialize';
import SignUpForm from './SignUpForm';

function SignUp(props) {
    return (
        <Modal
            actions={[
                <Button flat modal="close" node="button" waves="green">Close</Button>
            ]}
            bottomSheet={false}
            fixedFooter={false}
            header="Login"
            id="modal-0"
            options={{
                dismissible: true,
                endingTop: '10%',
                inDuration: 250,
                onCloseEnd: null,
                onCloseStart: null,
                onOpenEnd: null,
                onOpenStart: null,
                opacity: 0.5,
                outDuration: 250,
                preventScrolling: true,
                startingTop: '4%'
            }}
            trigger={<Button className="orange" node="button">Sign Up</Button>}
        >
            <SignUpForm />
        </Modal>
    );
}

export default SignUp;