import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestedAccounts.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/494985100_2848762958845078_2536217659397834024_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=y7lBGiRpiZMQ7kNvwFQPwI1&_nc_oc=AdmKPISlnmCdx8C-KiXf-MRmTIwl5jijdQdwX80m1pi51QQDR17PtVNPJTJZt0QouzyjFVdysOGEfQpXLT12OYho&_nc_zt=23&_nc_ht=scontent.fsgn5-14.fna&_nc_gid=WeFmVPzAs9OTbvSt-KxTbA&oh=00_AfQ6WZVCTflbjV9vf54YfL3Ywllj6TAF5kwNwnnLZPLG9A&oe=6878757E"
                alt=""
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>VStorm</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>Trần Vũ Bão</p>
            </div>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
