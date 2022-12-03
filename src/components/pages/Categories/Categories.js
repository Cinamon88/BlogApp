
import { getCategories } from "../../../redux/categoriesRedux";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Categories = () => {
    const categories = useSelector(getCategories);

    return (
        <section>
            <h1 className="mb=5">All categories</h1>
            <Row xs={1} md={1} className="g-2 justify-content-md-center">
                {categories.map((category) => (
                    <Col key={category}>
                        <Link to={'/categories/' + category}>
                            <Button variant={'outline-secondary'} className="px-5 g-2">
                                {category}
                            </Button>
                        </Link>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default Categories;