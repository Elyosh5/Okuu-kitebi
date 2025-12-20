'use client'
import type { FC } from 'react';
import scss from './Operator.module.scss';

export const Operator: FC = () => {
  return (
    <section className={scss.Operator}>
      <div className='container'>
        <div className={scss.content}>Operator</div>
      </div>
    </section>
  );
};
