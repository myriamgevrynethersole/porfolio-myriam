import style from "./top-page.css"
import Link from 'next/link';


const TopPage = () => {
    return (
        <div className="PageTop">
            <Link href={"/page-principale"}><div className="Logo"></div></Link>
        </div>
    );
};

export default TopPage;