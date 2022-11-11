let p = prompt("donner la valeur")

function premier(arg)
{
    for (let index = 2; index < arg; index++) {
        if (arg % index === 0)
            return false;
    }
    return true;
}