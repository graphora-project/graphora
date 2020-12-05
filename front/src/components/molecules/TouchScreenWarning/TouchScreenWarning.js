import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import Modal from '@material-ui/core/Modal'
import { ReactComponent as CloseIcon } from '../../../icons/close.svg'
import touchScreenWarningStyles from './TouchScreenWarningStyles'

export const TouchScreenWarning = ({ showMessage, handleCloseMessage }) => {
  const classes = touchScreenWarningStyles()

  return (
    <Modal open={showMessage} onClose={handleCloseMessage}>
      <div className={classes.modalContainer}>
        <div className={classes.messageContainer}>
          <div className={classes.closeButtonContainer}>
            <IconButton onClick={() => handleCloseMessage()}>
              <CloseIcon />
            </IconButton>
          </div>
          <Typography variant="h6" className={classes.title}>
            Graphora funciona mejor en el sitio de escritorio
          </Typography>
          <Typography className={classes.description}>
            En el sitio movil no serás capaz de ver ni de interactuar con el
            grafo. :(
          </Typography>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => handleCloseMessage()}
            className={classes.textInButton}
          >
            Entendido
          </Button>
        </div>
      </div>
    </Modal>
  )
}

TouchScreenWarning.propTypes = {
  showMessage: PropTypes.bool.isRequired,
  handleCloseMessage: PropTypes.func.isRequired,
}
