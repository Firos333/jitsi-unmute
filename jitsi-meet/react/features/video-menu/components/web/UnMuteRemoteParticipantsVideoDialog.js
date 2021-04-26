/* @flow */

import React from 'react';

import { Dialog } from '../../../base/dialog';
import { translate } from '../../../base/i18n';
import { connect } from '../../../base/redux';
import AbstractUnMuteRemoteParticipantsVideoDialog
    from '../AbstractUnMuteRemoteParticipantsVideoDialog';

/**
 * A React Component with the contents for a dialog that asks for confirmation
 * from the user before disabling a remote participants camera.
 *
 * @extends Component
 */
class UnMuteRemoteParticipantsVideoDialog extends AbstractUnMuteRemoteParticipantsVideoDialog {
    /**
     * Implements React's {@link Component#render()}.
     *
     * @inheritdoc
     * @returns {ReactElement}
     */
    render() {
        return (
            <Dialog
                okKey = 'dialog.unMuteParticipantsVideoButton'
                onSubmit = { this._onSubmit }
                titleKey = 'dialog.unMuteParticipantsVideoTitle'
                width = 'small'>
                <div>
                    { this.props.t('dialog.unMuteParticipantsVideoBody') }
                </div>
            </Dialog>
        );
    }

    _onSubmit: () => boolean;
}

export default translate(connect()(UnMuteRemoteParticipantsVideoDialog));
