import React from 'react'
import { Modal, Grid, Button } from '@material-ui/core'

const ConfirmationModal = ({ show, success, close }) => {
    return (
        <Modal open={show}>
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={6} style={{ backgroundColor: '#fff', borderRadius: 10, border: '1px solid red', padding: 8 }}>
                    <p style={{ fontSize: 18, color: 'grey', textAlign: 'center', fontWeight: '600' }}>
                        {success ? 'Tu pedido ha sido realizado con éxito' : 'Ha habido un problema al solicitar tu pedido'}
                    </p>
                    <div style={{ width: '100%', textAlign: 'center' }}>
                        <Button style={{ backgroundColor: 'green', color: '#fff' }} onClick={close}>
                            Aceptar
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Modal>
    )
}

export { ConfirmationModal }