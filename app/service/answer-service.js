'use strict';

module.exports = ['$q', '$log', '$window', '$http', 'authService', answerService];

function answerService($q, $log, $window, $http, authService){
  $log.debug('answerService');

  let service = {};

  service.createAnswer = function(postID, answerData){
    $log.debug('service.createAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/answer/${postID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, answerData, config);
    })
    .then( res => {
      $log.log('created an answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to create an answer',err);
      return $q.reject(err);
    });
  };

  service.updateAnswer = (answerID, answerData) => {
    $log.debug('service.updateAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/answer/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.put(url, answerData, config);
    })
    .then( res => {
      $log.log('updated an answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to update an answer',err);
      return $q.reject(err);
    });
  };

  service.replyAnswer = function(answerID, answerData){
    $log.debug('service.replyAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/replyanswer/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, answerData, config);
    })
    .then( res => {
      $log.log('replied an answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to reply an answer',err);
      return $q.reject(err);
    });
  };

  service.reportAnswer = function(answerID, report){
    $log.debug('service.reportAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/answer/report/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.post(url, report, config);
    })
    .then( res => {
      $log.log('reported an answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to report an answer',err);
      return $q.reject(err);
    });
  };

  service.fetchMyAnswers = function(){
    $log.debug('service.createArticleAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/myanswers`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.get(url, config);
    })
    .then( res => {
      $log.log('fetched my answer', res);
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to fetch my answer',err);
      return $q.reject(err);
    });
  };

  service.upvoteAnswer = function(answerID){
    $log.debug('service.upvoteAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/upvote/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.get(url, config);
    })
    .then( res => {
      $log.log('upvoted an answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to upvote an answer',err);
      return $q.reject(err);
    });
  };

  service.downvoteAnswer = function(answerID){
    $log.debug('service.downvoteAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/downvote/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.get(url, config);
    })
    .then( res => {
      $log.log('downvoted an answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to downvote an answer',err);
      return $q.reject(err);
    });
  };

  service.unvoteAnswer = function(answerID){
    $log.debug('service.unvoteAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/unvote/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.get(url, config);
    })
    .then( res => {
      $log.log('unvoted an answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to unvote an answer',err);
      return $q.reject(err);
    });
  };

  service.fetchAnswerReplies = function(answerID){
    $log.debug('service.upvoteAnswer');

  
    let url = `${__API_URL__}/api/answerreplies/${answerID}`;
    let config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    };

    return $http.get(url, config)
    .then( res => {
      $log.log('fetched answer replies', res.data);
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to fetch answer replies',err);
      return $q.reject(err);
    });
  };

  service.deleteAnswer = function(answerID){
    $log.debug('service.deleteAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/answer/deleteanswer/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.delete(url, config);
    })
    .then( res => {
      $log.log('deleted an answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to delete an answer',err);
      return $q.reject(err);
    });
  };

  service.deleteArticleAnswer = function(answerID){
    $log.debug('service.deleteArticleAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/answer/deletearticleanswer/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.delete(url, config);
    })
    .then( res => {
      $log.log('deleted an article answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to delete an article answer',err);
      return $q.reject(err);
    });
  };

  service.deletePollAnswer = function(answerID){
    $log.debug('service.deletePollAnswer');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/answer/deletepollanswer/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.delete(url, config);
    })
    .then( res => {
      $log.log('deleted an poll answer');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to delete an poll answer',err);
      return $q.reject(err);
    });
  };

  service.deleteReply = function(answerID){
    $log.debug('service.deleteReply');

    return authService.getToken()
    .then( token => {
      let url = `${__API_URL__}/api/answer/deletereply/${answerID}`;
      let config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        }
      };

      return $http.delete(url, config);
    })
    .then( res => {
      $log.log('deleted an reply');
      return res.data;
    })
    .catch( err => {
      $log.error('Failed to delete an reply',err);
      return $q.reject(err);
    });
  };

  return service;

}