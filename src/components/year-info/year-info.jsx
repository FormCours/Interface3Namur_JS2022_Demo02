const YearInfo = ({ year }) => {

    // Condition via un structure "if"
    if (year < 1600) {
        return (
            <div>
                <h2>Année encodée invalide (╯‵□′)╯︵┻━┻ </h2>
            </div>
        );
    }

    const isBissextile = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    const currentYear = (new Date()).getFullYear();

    return (
        <div>
            <h2>Information sur l'année {year}</h2>

            {/* Condition via operateur ternaire */}
            <p>L'année {isBissextile ? 'est' : 'n\'est pas'} bissextile !</p>

            {/* Condition via operateur logique */}
            {currentYear === year && (
                <p>C'est l'année est en cours !</p>
            )}
        </div>
    );
};

export default YearInfo;