modalRedisGet = () => {
  bootbox.prompt({
    title: 'Quick <strong>GET</strong>',
    buttons: {
      confirm: {
        label: 'Get',
        className: 'btn-primary'
      },
      cancel: {
        label: 'Cancel',
        className: 'btn-link'
      }
    },
    callback: function (result) {
      if (result != null) {
        axios.get(`/redis/get/${result}`)
        .then(response => {
          let strResponse = JSON.stringify(response.data);
          let message = strResponse == '""' ? "Empy key." : strResponse;
          bootbox.alert({
            title: `<strong class="text-success">${response.status} ${response.statusText}</strong>`,
            message: message,
          });
        })
        .catch(error => {
          bootbox.alert({
            title: `<strong class="text-danger">${error.response.status} ${error.response.statusText}</strong>`,
            message: error,
          });
        });
      }
    }
  });
}
