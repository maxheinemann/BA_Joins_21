//TODO Ziel: Ich mache die Tabellenreihenfolge random, so muss wirklich auch auf die Tabellenbezeichnung geachtet werden

class Helper {

    alphabet = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
        'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    names_used = [];

    get_name_not_used_yet(){
        var name;
        for(i=0;i<30;i++){
            var ran = document.new_random_integer(26);
            if(!this.names_used.includes(this.alphabet[ran])){
                this.names_used.push(this.alphabet[ran]);
                name = this.alphabet[ran];
                i = i + 30;
            }
        }
        return name;
    }
}

class stringBuilderClass {
    create_stmt (join_type, is_correct, pos_error){
        var stmt = '';
        stmt += this.built_statement(join_type, is_correct, pos_error);
        helper.names_used = [];
        return stmt;
    }

    built_statement(join_type, is_correct, pos_error){
        var task = '\n\n';
        switch (join_type) {
            case 'join_on_even': task += this.built_join_on_even(join_type, is_correct, pos_error);break;
            case 'join_on_uneven': task += this.built_join_on_uneven(join_type, is_correct, pos_error);break;
            case 'join_using' : task += this.built_join_using(join_type, is_correct, pos_error);break;
        }
        return task;
    }
//TODO warum kommt hier noch nichts
    built_join_on_even(join_type, is_correct, pos_error){
        var stmt = 'ON(';

        var att_name_1 = helper.get_name_not_used_yet();
        var att_name_2 = helper.get_name_not_used_yet();

        var att_name_1_2 = helper.get_name_not_used_yet();
        var att_name_2_2 = helper.get_name_not_used_yet();

        var table_name_1 = helper.get_name_not_used_yet();
        var table_name_2 = helper.get_name_not_used_yet();

        stmt += table_name_1 + '.' + att_name_1 + ' = ' + table_name_2 + '.' + att_name_1;
        stmt += ' AND ';
        stmt += table_name_1 + '.' + att_name_2 + ' = ' + table_name_2 + '.' + att_name_2;
        stmt += ')  ';

        if(is_correct === 'c'){
            stmt += table_name_1 + '(' + att_name_1 + ',' + att_name_2 + ')';
            stmt += '\n                             ';
            stmt += table_name_2 + '(' + att_name_1 + ',' + att_name_2 + ')';
        }
        if(is_correct === 'i'){

            var att_name_wrong = helper.get_name_not_used_yet();
            if(pos_error === '1'){
                stmt += table_name_1 + '(' + att_name_wrong + ',' + att_name_2 + ')';
                stmt += '\n                             ';
                stmt += table_name_2 + '(' + att_name_wrong + ',' + att_name_2 + ')';
            }else{
                stmt += table_name_1 + '(' + att_name_1 + ',' + att_name_wrong + ')';
                stmt += '\n                             ';
                stmt += table_name_2 + '(' + att_name_1 + ',' + att_name_wrong + ')';
            }
        }
        return stmt;
    }

    built_join_on_uneven(join_type, is_correct, pos_error){

        var stmt = 'ON(';

        var att_name_1 = helper.get_name_not_used_yet();
        var att_name_2 = helper.get_name_not_used_yet();

        var att_name_1_2 = helper.get_name_not_used_yet();
        var att_name_2_2 = helper.get_name_not_used_yet();

        var table_name_1 = helper.get_name_not_used_yet();
        var table_name_2 = helper.get_name_not_used_yet();

        stmt += table_name_1 + '.' + att_name_1 + ' = ' + table_name_2 + '.' + att_name_1_2;
        stmt += ' AND ';
        stmt += table_name_1 + '.' + att_name_2 + ' = ' + table_name_2 + '.' + att_name_2_2;
        stmt += ')  ';

        if(is_correct === 'c'){
            stmt += table_name_1 + '(' + att_name_1 + ',' + att_name_2 + ')';
            stmt += '\n                             ';
            stmt += table_name_2 + '(' + att_name_1_2 + ',' + att_name_2_2 + ')';
        }
        if(is_correct === 'i'){
            var att_name_table_1_2 = document.new_random_integer(2);
            var att_name_1_pos_dec = document.new_random_integer(2);
            var att_name_2_pos_dec = document.new_random_integer(2);

            var att_name_wrong = helper.get_name_not_used_yet();

            if(pos_error === '1'){
                if(att_name_1_pos_dec === 0){
                    stmt += table_name_1 + '(' + att_name_wrong + ',' + att_name_2 + ')';
                    stmt += '\n                             ';
                    stmt += table_name_2 + '(' + att_name_1_2 + ',' + att_name_2_2 + ')';
                }else{
                    stmt += table_name_1 + '(' + att_name_1 + ',' + att_name_2 + ')';
                    stmt += '\n                             ';
                    stmt += table_name_2 + '(' + att_name_wrong + ',' + att_name_2_2 + ')';
                }
            }
            if(pos_error === '2'){
                if(att_name_1_pos_dec === 0){
                    stmt += table_name_1 + '(' + att_name_1 + ',' + att_name_wrong + ')';
                    stmt += '\n                             ';
                    stmt += table_name_2 + '(' + att_name_1_2 + ',' + att_name_2_2 + ')';
                }else{
                    stmt += table_name_1 + '(' + att_name_1 + ',' + att_name_2 + ')';
                    stmt += '\n                             ';
                    stmt += table_name_2 + '(' + att_name_1_2 + ',' + att_name_wrong + ')';
                }
            }
        }
        return stmt;
    }

    built_join_using(join_type, is_correct, pos_error){

        var stmt = 'USING(';

        var att_name_1 = helper.get_name_not_used_yet();
        var att_name_2 = helper.get_name_not_used_yet();

        var att_name_1_2 = helper.get_name_not_used_yet();
        var att_name_2_2 = helper.get_name_not_used_yet();

        var table_name_1 = helper.get_name_not_used_yet();
        var table_name_2 = helper.get_name_not_used_yet();

        stmt += att_name_1;
        stmt += ',';
        stmt += att_name_2;
        stmt += ')  ';

        if(is_correct === 'c'){
            stmt += table_name_1 + '(' + att_name_1 + ',' + att_name_2 + ')';
            stmt += '\n            ';
            stmt += table_name_2 + '(' + att_name_1 + ',' + att_name_2 + ')';
        }
        if(is_correct === 'i'){
            var att_name_1_pos_dec = document.new_random_integer(2);

            var att_name_wrong = helper.get_name_not_used_yet();
            if(pos_error === '1'){
                stmt += table_name_1 + '(' + att_name_wrong + ',' + att_name_2 + ')';
                stmt += '\n            ';
                stmt += table_name_2 + '(' + att_name_wrong + ',' + att_name_2 + ')';
            }else{
                stmt += table_name_1 + '(' + att_name_1 + ',' + att_name_wrong + ')';
                stmt += '\n            ';
                stmt += table_name_2 + '(' + att_name_1 + ',' + att_name_wrong + ')';
            }
        }
        return stmt;
    }

}



const helper = new Helper();
const stringBuilder = new stringBuilderClass();
var i;
var i2;
var i3;
var i4;
var i5;

document.experiment_definition(
    {
        experiment_name:'Max First  Case_1',
        seed:'42',
        introduction_pages:['Case_1' + '\n'+
        'Thanks for participating in the experiment on case distinction in SQL.\n\n' +
        'Running the experiment takes about 20 minutes.\n\n' +
        'In the following, different case distinction variants in SQL will be shown to you. ' +
        'The question for each statement is, what it returns. ' +
        'For example, if you see the following statement\n\n' +
        'Value: x=3'+
        '  if (x<5) {\n' +
        '    return x+1;\n' +
        '  } else {\n' +
        '    return x-1;\n' +
        '  }\n\n' +
        'the answer will be 4, i.e. you have to press the button [4].\n\n',

            'The experiment consists of a training phase an an experiment phase.\n\n' +
            'The training phase is only for you to get familiar with the ' +
            'questions and the experiment itself.' +
            'You can cancel the training session whenever you like. As long ' +
            'you do not cancel the training, new code snippets will be shown to you.\n\n' +
            'When the you see the first task in the training session, please increase/decrease the font ' +
            'in the browser so that you can see all lines of code (plus some additional lines).\n' +
            'Depending on your browser and your machine, this could be done by pressing [CTRL] + [+] ' +
            'or [CTRL] + [.].\n\n' +
            'Press [Return] to enter the training phase.'],
        pre_run_instruction:'Please put your fingers on the number buttons.\n\nWhen you press [Enter] the first task will be shown.',
        finish_pages:['Thanks for participating. When you press [Enter], the experiments data will be downloaded.\n\n' +
        'If you want to contribute to research, you can send the downloaded file to maximilian.heinemann@stud.uni-due.de.'],
        layout:[
            //Welche Variablen braucht mein Versuchs
            {variable:'Join_Type',treatments:['join_on_even', 'join_on_uneven', 'join_using']}, //, 'join_on_even', 'join_on_uneven', 'join_using'
            {variable:'is_correct',treatments:['c', 'i']},
            {variable:'pos_error',treatments:['1', '2']},
        ],
        repetitions:10,                    // Anzahl der Wiederholungen pro Treatmentcombination
        accepted_responses:['c', 'i'], // Tasten, die vom Experiment als Eingabe akzeptiert werden
        task_configuration:(t)=>{



            let join_type = t.treatment_combination[0].value;
            let is_correct = t.treatment_combination[1].value;
            let pos_error = t.treatment_combination[2].value;

            let task = '';

            task += stringBuilder.create_stmt(join_type, is_correct, pos_error);

            console.log(t.treatment_combination);

            if(t.treatment_combination[0].value==='join_on_even'){
                t.code = task;
                t.expected_answer = is_correct;
            }

            if(t.treatment_combination[0].value==='join_on_uneven'){
                t.code = task;
                t.expected_answer = is_correct;
            }

            if(t.treatment_combination[0].value==='join_using'){
                t.code = task;
                t.expected_answer = is_correct;
            }

            t.after_task_string = ()=>'The correct answer for the code was: ' + t.expected_answer;

        }
    }
);



