import React from 'react';

import { SelectMenu } from '@primer/components';
import { TriangleDownIcon, CheckIcon } from '@primer/octicons-react';

import './SortMenu.scss';

const FILTERS = [
    { filter: 'Newest', value: 'is:open is:issue sort:created-asc' },
    { filter: 'Oldest', value: 'is:open is:issue sort:created-desc' },
    {
        filter: 'Most commented',
        value: 'is:open is:issue sort:comments-asc',
    },
    {
        filter: 'Least commented',
        value: 'is:open is:issue sort:comments-desc',
    },
    {
        filter: 'Recently updated',
        value: 'is:open is:issue sort:updated-asc',
    },
    {
        filter: 'Least recently updated',
        value: 'is:open is:issue sort:updated-desc',
    },
];

const SortMenu = (props) => {
    const { onChange, active } = props;
    const renderFilters = () =>
        FILTERS.map(({ filter, value }, index) => (
            <span
                key={index}
                className="gh-filter-menu__item"
                onClick={() => onChange(value)}
            >
                {active === value ? <CheckIcon size={16} /> : null}
                {filter}
            </span>
        ));

    return (
        <SelectMenu className="gh-sort-menu">
            <summary className="gh-sort-menu__summary" as="summary">
                Sort
                <TriangleDownIcon size={16} />
            </summary>
            <SelectMenu.Modal className="gh-sort-menu__modal">
                <SelectMenu.Header>Projects</SelectMenu.Header>
                <div>{renderFilters()}</div>
            </SelectMenu.Modal>
        </SelectMenu>
    );
};

export default SortMenu;
