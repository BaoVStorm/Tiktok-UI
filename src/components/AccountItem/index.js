import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import Image from '~/components/image';
import styles from './AccountItem.module.scss';
const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/0a53c6cbb075cfe0cfd487afc5c1865f~tplv-tiktokx-cropcenter:1080:1080.jpeg?dr=14579&refresh_token=03caff5a&x-expires=1752159600&x-signature=vgkFaIiI4DdPnD%2FeDr6PAsxBRBY%3D&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=81f88b70&idc=my"
                alt=""
            />
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Nguyễn Văn A</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
                </p>
                <p className={cx('usename')}>nguyenvana</p>
            </div>
        </div>
    );
}

export default AccountItem;
