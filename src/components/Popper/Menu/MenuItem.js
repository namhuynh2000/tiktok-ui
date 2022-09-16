import Button from "~/components/Button/Button";


function MenuItem({ data }) {
    return (
        <Button className="menu-item" leftIcon={data.icon} to={data.to}>{data.title}</Button>
    );
}

export default MenuItem;