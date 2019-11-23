$(document).ready(function() {
    $('#fr')
        .bootstrapValidator({
            message: 'This value is not valid',
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                name: {
                    message: 'The name is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The name is required and can\'t be empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The name must be more than 6 and less than 30 characters long'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_\.]+$/,
                            message: 'The name can only consist of alphabetical, number, dot and underscore'
                        }
                    }
                },
                company: {
                    message: 'The company is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The company is required and can\'t be empty'
                        },
                        
                    }
                },
                email: {
                    validators: {
                        notEmpty: {
                            message: 'The email address is required and can\'t be empty'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                textarea: {
                    message: 'The note is not valid',
                    validators: {
                        notEmpty: {
                            message: 'The note is required and can\'t be empty'
                        },
                        stringLength: {
                            min: 6,
                            max: 30,
                            message: 'The note must be more than 6 and less than 30 characters long'
                        },
                       
                    }
                },
                
               
            }
        })
        
});