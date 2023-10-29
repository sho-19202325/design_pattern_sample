abstract class DataImporter {
    constructor(
        protected filePath: string
    ) {}

    execute() {
        this.openFile(this.filePath);
        this.validateFile();
        this.parseFile();
        this.insertData();
        this.closeFile(this.filePath);
    }

    openFile(filePath: string) {
        console.log(`Open file: ${filePath}`);
    }

    closeFile(filePath: string) {
        console.log(`Close file: ${filePath}`);
    }

    protected abstract validateFile(): void;
    protected abstract parseFile(): void;
    protected abstract insertData(): void;
}

class JsonImporter extends DataImporter {
    protected validateFile() {
        console.log('Validate json file');
    }

    protected parseFile() {
        console.log('Parse json file');
    }

    protected insertData() {
        console.log('Insert json data');
    }
}

class CsvImporter extends DataImporter {
    protected validateFile() {
        console.log('Validate csv file');
    }

    protected parseFile() {
        console.log('Parse csv file');
    }

    protected insertData() {
        console.log('Insert csv data');
    }
}

// Usage
const jsonImporter = new JsonImporter('file.json');
jsonImporter.execute();
// expected output:
//
// Open file: file.json
// Validate json file
// Parse json file
// Insert json data
// Close file: file.json

const csvImporter = new CsvImporter('file.csv');
csvImporter.execute();
// expected output:
//
// Open file: file.csv
// Validate csv file
// Parse csv file
// Insert csv data
// Close file: file.csv
