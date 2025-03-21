#!/usr/bin/env bash

# VERSION 2

# error happended, then exit. 
set -e

# display executing command. 
# set -x

field_replaced_percent=$1
shift
docs_paths=`find $@ ! -path "./docs/.vuepress*" | grep -P ".*\.mdx?"`
# pattern='```\w\+\n.*```'
pattern='🎺(\s*)```[^`]+🎺(\s*)```(🎺|$)'
replaced_string='🎺\1```🎺\1**********************!!!PROTECTION POLICY!!!**********************🎺\2Waiting For The Next Deployment, Maybe It Would Be Displayed After That.🎺\2```🎺'

for doc in $docs_paths; do
    field_count=$(sed ':label;N;s/```\w\+\n.*```/```\nhahaha hehehe\n```/g;b label' $doc |grep 'hahaha hehehe'|wc -l)
    echo "$doc is handling $field_count. "
    #set -x
    field_replaced_count=`echo $(echo "${field_replaced_percent}*${field_count}/1"|bc)`
    if [ $field_count -eq 1 ] ; then
        field_replaced=`echo -n '1' | shuf -n $field_replaced_count`
    else
        field_replaced=`echo -n "$(seq $field_count)" | shuf -n $field_replaced_count | sort -n -r`
    fi
    #set +x
    sed -i -r ':a;N;s/\n/🎺/;ba' $doc
    sed -i -r 's/([^`])`([^`])/\1❦\2/' $doc
    for field_num in $field_replaced; do
        # sed -i ":label;N;s/$pattern/$replaced_string/$field_num;b label" $doc
        sed -i -r "s/$pattern/$replaced_string/$field_num" $doc
        #echo "$doc's $field_num/$field_count replaces is finished. "
    done
    sed -i -r 's/❦/`/' $doc
    sed -i -r 's/🎺/\n/g' $doc
    echo "$doc is finished. field_count $field_count, field_replaced_count $field_replaced_count, [`echo -n \"$field_replaced\" | tr '\n' ' '`]"
done


# VERSION 1

# docs_replaced_doc="./docs/WARNING.md"
# docs_replaced_scale=5
# docs_paths=`find ./docs/ ! -path "./docs/README.md" ! -path "./docs/.vuepress*" | grep -P ".*\.md"`
# docs_count=`echo -n "${docs_paths}" | wc -l`

# if [ $docs_count -eq 0 ] ; then
#     docs_replaced_count=0
# elif [ $docs_count -le $docs_replaced_scale ] ; then
#     docs_replaced_count=1
# else
#     docs_replaced_count=$(($docs_count / $docs_replaced_scale + 1))
# fi

# docs_replaced=`echo -n "${docs_paths}" | shuf -n $docs_replaced_count`
# for doc in $docs_replaced; do
#     cat $docs_replaced_doc > $doc
#     echo "replaced $doc with $docs_replaced_doc"
# done
