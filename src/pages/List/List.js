import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import Header from '../../components/Header/Header';
import CandidateCard from './components/CandidateCard/CandidateCard';
import Search from './components/Search/Search';
import candidateAPI from '../../api/candidateAPI';
import Pagination from '@material-ui/lab/Pagination';
import { List as MaterialList } from '@material-ui/core';
import classes from './List.module.css';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';

const List = () => {
  const [candidates, setCandidates] = useState([]);
  const [isUpdated, setIsUpdated] = useState(true);
  const [error, setError] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [pagination, setPagination] = useState({ size: 10, count: 0, page: 0 });

  const onDelete = async (id) => {
    try {
      await candidateAPI.delete(id);
      setIsUpdated(!isUpdated);
    } catch {
      setError(true);
    }
  };

  useEffect(() => {
    const loadCandidates = async () => {
      try {
        const res = searchTerm
          ? await candidateAPI.searchByName(searchTerm, pagination)
          : await candidateAPI.getAllPaginated(pagination);

        const { content, totalPages, number } = res.data;

        setCandidates(content);
        setPagination({
          size: 10,
          count: totalPages,
          page: number,
        });
      } catch (err) {
        setError(true);
        console.log(err);
      }
    };

    loadCandidates();
  }, [isUpdated]);

  const changePage = (_, page) => {
    setPagination({ ...pagination, page: page - 1 });
    setIsUpdated(!isUpdated);
  };

  return (
    <>
      <Header title="Lista" />
      <Search
        onChange={(term) => {
          setSearchTerm(term);
          setIsUpdated(!isUpdated);
        }}
      />
      <div className={classes.ListWrapper}>
        <Paper elevation={1} className={classes.List}>
          <MaterialList>
            <Divider component="li" />
            {candidates.map((candidate) => (
              <CandidateCard
                key={candidate.id}
                {...candidate}
                onDelete={onDelete}
              />
            ))}
          </MaterialList>
        </Paper>
      </div>
      <div className={classes.PaginationWrapper}>
        <Pagination count={pagination.count} onChange={changePage} />
      </div>
    </>
  );
};

export default withRouter(List);
