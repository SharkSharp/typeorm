import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    OneToMany,
    PrimaryGeneratedColumn,
} from "../../../../src"
import { Book } from "./Book"
import { Comment } from "./Comment"

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @JoinTable()
    @ManyToMany(() => Book, (book) => book.author, { eager: true })
    books: Book

    @OneToMany(() => Comment, (comment) => comment.author)
    comments: Comment[]
}