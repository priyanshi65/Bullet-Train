require("daterangepicker/daterangepicker.css");

import 'daterangepicker';

function enableDateFields($scope) {
  function clearDate(event) {

    // don't submit the form.
    event.preventDefault();

    // find a bunch of relevant elements.
    var $dateField = $(event.target).closest('.date-input').find('input');

    // clear the cloudinary id.
    $dateField.val(null);

  }

  $scope.find('input.single-daterange-with-time').daterangepicker({
    singleDatePicker: true,
    timePicker: true,
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear'
    }
  });

  $scope.find('input.single-daterange-with-time').on('apply.daterangepicker', function(ev, picker) {
    $(this).val(picker.startDate.format('M/D/YYYY h:mm A'));
  });

  $scope.find('input.single-daterange-with-time').on('cancel.daterangepicker', function(ev, picker) {
    $(this).val('');
  });

  $scope.find(".date-input button.clear").click(clearDate);
}

$(document).on('turbolinks:load', function() {
  enableDateFields($('body'));
})

$(document).on('sprinkles:update', function(event) {
  enableDateFields($(event.target));
})