const getSliced = (data, count) => {
    if(count === -1) {
        throw new Error('some error');
    }

    if(count < 0) {
        return [];
    }
    
   return data.slice(0, count);
};


module.exports = {
    getSliced
};
