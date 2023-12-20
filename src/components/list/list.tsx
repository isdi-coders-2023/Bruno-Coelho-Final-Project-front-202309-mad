import { useEffect } from 'react';
import { Card } from '../card/card';
import './list.scss';
import { useCares } from '../../hooks/cares/use.cares';

type Props = {
  careType: string;
};

export function List({ careType }: Props) {
  const { loadCaresByType, cares } = useCares();

  useEffect(() => {
    loadCaresByType(careType);
  }, [loadCaresByType]);

  return (
    <div className="list-container">
      <div className="list-title-container">
        <h2>{careType.toUpperCase()}</h2>
      </div>
      <ul className="cares-list">
        {cares.map((item) => (
          <Card key={item.id} care={item}></Card>
        ))}
      </ul>
    </div>
  );
}
