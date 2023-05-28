const RNFS = require('react-native-fs');
const Path = RNFS.DocumentDirectoryPath + '/Data.json';

class StorageService {
    constructor(Base) {
        this.BaseClass = Base;
        this.Data = {};

        RNFS.exists(Path)
            .then((state) => {
                if (state == false) {
                    RNFS.writeFile(Path, '{}', 'utf8')
                        .then((success) => {
                            console.log('FILE Created.');
                        }).catch((err) => {
                            console.log(err.message);
                        });
                }
                else {
                    RNFS.readFile(Path, 'utf8')
                        .then(content => {
                            this.Data = JSON.parse(content);
                        });
                }
            }).catch((err) => {
                console.log(err.message);
            });
    }
    Set(Name, Content) {
        this.Data[Name] = Content;
        this.Save();
    }
    Remove(Name) {
        delete this.Data[Name];
        this.Save();
    }
    Get(Name) {
        return this.Data[Name];
    }
    Save() {
        RNFS.writeFile(Path, JSON.stringify(this.Data), 'utf8')
            .then((success) => {
                console.log('FILE Updated.');
            }).catch((err) => {
                console.log(err.message);
            });
    }
}

export default StorageService;
