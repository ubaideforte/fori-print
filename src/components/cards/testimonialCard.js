import styled from "styled-components";

const StyledCard = styled.div`
  background-color: #f4f4f4;
  text-align: center;
  padding: 24px;
  margin: 0 16px;

  .card-body:before {
    content: "''";
    color: #efa718;
    font-weight: 800;
    font-size: 48px;
  }

  .testimony {
    color: #75787b;
    font-size: 22px;
  }

  .name {
    font-weight: 700;
    text-transform: uppercase;
    margin: 0;
  }

  .relation {
    font-weight: 700;
    text-transform: uppercase;
    color: #b0b0b0;
  }

  @media (max-width: 1200px) {
    .testimony {
      font-size: 20px;
    }
    .name,
    .relation {
      font-size: 18px;
      margin: 0;
    }
  }

  @media (max-width: 768px) {
    .testimony {
      font-size: 20px;
    }
    .name,
    .relation {
      font-size: 17px;
    }
  }

  @media (max-width: 576px) {
    padding: 0px;
    .testimony {
      font-size: 16px;
    }
    .name,
    .relation {
      font-size: 13px;
    }
  }
`;

const TestimonialCard = (props) => {
  const { testimony, name, relation } = props;
  return (
    <StyledCard>
      <div className="card-body">
        <p className="testimony">{testimony}</p>
        <p className="name">{name}</p>
        <p className="relation">{relation}</p>
      </div>
    </StyledCard>
  );
};

export default TestimonialCard;
