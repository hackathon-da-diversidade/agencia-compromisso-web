import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Header from 'components/Header/Header';
import CandidateCard from './components/CandidateCard/CandidateCard';
import Search from './components/Search/Search';
import candidateAPI from 'api/candidateAPI';
import Pagination from '@material-ui/lab/Pagination';
import classes from './List.module.css';

const List = () => {
  const [candidates, setCandidates] = useState([]);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ size: 10, count: 0, page: 0 });

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const res = searchTerm
          ? await candidateAPI.searchByName(searchTerm, pagination)
          : await candidateAPI.getAllPaginated(pagination);

        const { content, totalPages, number } = res.data;
        setCandidates(content);
        setPagination({
          ...pagination,
          count: totalPages,
          page: number,
        });
      } catch (err) {
        setError(true);
        console.log(err);
      }
    };

    loadCandidates();
  }, [searchTerm, pagination.page]);

  const changePage = (_, page) => {
    setPagination({ ...pagination, page: page - 1 });
  };

  return (
    <>
      <Header title="Lista" />
      <Search onChange={setSearchTerm} />
      {candidates.map(candidate => (
        <CandidateCard key={candidate.id} {...candidate} />
      ))}
      <div className={classes.PaginationWrapper}>
        <Pagination count={pagination.count} onChange={changePage} />
      </div>
    </>
  );
};

export default withRouter(List);
